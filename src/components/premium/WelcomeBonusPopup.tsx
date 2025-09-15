import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
interface FormData {
  nome: string;
  telefone: string;
}
const WelcomeBonusPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<FormData>();
  const {
    toast
  } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Formata no padrão (XX) 9XXXX-XXXX
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 3) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)}${numbers.slice(3)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)}${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };
  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === 11 && numbers.startsWith('11') || numbers.length === 11;
  };
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const phoneNumbers = data.telefone.replace(/\D/g, '');
      const response = await fetch('https://apiweb.conector.digital/webhook/5c3e088a-ec5a-4df0-9502-d7e3aa9f5d09', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: data.nome,
          telefone: phoneNumbers
        })
      });
      if (response.ok) {
        toast({
          title: "Cadastro realizado!",
          description: "Você receberá seu brinde de boas-vindas em breve!"
        });
        setIsOpen(false);
        reset();
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao realizar o cadastro. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-primary">
            🎁 Brinde de Boas-Vindas!
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center mb-4">
          <p className="text-muted-foreground">
            Cadastre seus dados e receba um <span className="font-semibold text-primary">brinde especial</span> de boas-vindas!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" {...register("nome", {
            required: "Nome é obrigatório",
            minLength: {
              value: 2,
              message: "Nome deve ter pelo menos 2 caracteres"
            }
          })} placeholder="Digite seu nome completo" />
            {errors.nome && <span className="text-sm text-destructive">{errors.nome.message}</span>}
          </div>

          <div>
            <Label htmlFor="telefone">Whatsapp</Label>
            <Input id="telefone" {...register("telefone", {
            required: "Telefone é obrigatório",
            validate: value => validatePhone(value) || "Formato inválido. Use (XX) 9XXXX-XXXX"
          })} placeholder="(11) 99999-9999" onChange={e => {
            e.target.value = formatPhoneNumber(e.target.value);
          }} maxLength={15} />
            {errors.telefone && <span className="text-sm text-destructive">{errors.telefone.message}</span>}
          </div>

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Não, obrigado
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Enviando..." : "Quero o brinde!"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default WelcomeBonusPopup;