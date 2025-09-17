import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Clock } from "lucide-react";
import templateAfcCover from "@/assets/template-afc-cover.png";
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
          title: "🎉 Cadastro realizado!",
          description: "Você receberá seu Template AFC GRÁTIS no WhatsApp em instantes!"
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
      <DialogContent className="sm:max-w-lg overflow-hidden">
        <DialogHeader className="space-y-4 pb-2 pt-4">
          {/* Badge de Tempo Limitado */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 bg-accent text-accent-foreground rounded-full text-xs font-bold animate-pulse px-3 py-1">
              <Clock className="w-3 h-3" />
              TEMPO LIMITADO
            </div>
          </div>
          
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-foreground leading-tight">
            BRINDE ESPECIAL POR<br className="sm:hidden" /> TEMPO LIMITADO
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4">
          {/* Imagem do Template AFC */}
          <div className="relative">
            <img src={templateAfcCover} alt="Template de Avaliação Funcional do Comportamento" className="w-48 h-auto rounded-lg shadow-lg hover-scale" />
            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
              GRÁTIS
            </div>
          </div>

          {/* Valor Cortado */}
          <div className="text-center">
            <div className="text-lg text-muted-foreground line-through mb-1">
              De R$ 49,90
            </div>
            <div className="text-2xl font-bold text-accent">
              TOTALMENTE GRÁTIS
            </div>
          </div>

          {/* Descrição com WhatsApp */}
          <div className="text-center bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-foreground">Receba IMEDIATAMENTE no seu WhatsApp</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Template completo de Avaliação Funcional do Comportamento para usar em suas sessões
            </p>
          </div>
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

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Não, obrigado
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-accent hover:bg-accent/90">
              {isSubmitting ? "Enviando..." : "🎁 QUERO MEU BRINDE GRÁTIS!"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default WelcomeBonusPopup;