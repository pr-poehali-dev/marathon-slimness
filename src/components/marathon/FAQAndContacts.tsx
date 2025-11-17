import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAndContactsProps {
  faqItems: FAQItem[];
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    goal: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isRegistering: boolean;
}

export const FAQAndContacts = ({
  faqItems,
  dialogOpen,
  setDialogOpen,
  formData,
  handleInputChange,
  handleSubmit,
  isRegistering
}: FAQAndContactsProps) => {
  return (
    <>
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Users" size={64} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Присоединяйся к сообществу!</h2>
          <p className="text-xl mb-8 opacity-90">
            Получай ежедневную поддержку, делись своими результатами и вдохновляй других
          </p>
          
          <div className="mb-8 space-y-4">
            <a 
              href="tel:89276864455" 
              className="flex items-center justify-center gap-3 text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              <Icon name="Phone" size={28} />
              <span>8-927-686-44-55</span>
            </a>
            <a 
              href="https://vk.link/yuliya_pp" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-xl hover:opacity-80 transition-opacity"
            >
              <Icon name="Link" size={24} />
              <span>vk.link/yuliya_pp</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://vk.link/yuliya_pp', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" />
              Связаться ВКонтакте
            </Button>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <Icon name="Zap" className="mr-2" />
                  Записаться на марафон
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Регистрация на марафон</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name-footer">Имя *</Label>
                    <Input
                      id="name-footer"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email-footer">Email *</Label>
                    <Input
                      id="email-footer"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone-footer">Телефон *</Label>
                    <Input
                      id="phone-footer"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 999 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="goal-footer">Ваша цель</Label>
                    <Textarea
                      id="goal-footer"
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      placeholder="Например: Похудеть на 10 кг, улучшить форму..."
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isRegistering}>
                    {isRegistering ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      'Зарегистрироваться'
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="opacity-75">© 2025 Марафон Стройности. Все права защищены.</p>
          </div>
        </div>
      </section>
    </>
  );
};
