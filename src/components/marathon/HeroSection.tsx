import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
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

export const HeroSection = ({
  dialogOpen,
  setDialogOpen,
  formData,
  handleInputChange,
  handleSubmit,
  isRegistering
}: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
              🎄 Новогоднее преображение
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Встречай Новый Год{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                новой собой
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Успей преобразиться к праздникам! 4 недели интенсивной работы над собой, чтобы встретить Новый Год в лучшей форме
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Zap" className="mr-2" />
                    Начать прямо сейчас
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
                      <Label htmlFor="name-hero">Имя *</Label>
                      <Input
                        id="name-hero"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email-hero">Email *</Label>
                      <Input
                        id="email-hero"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone-hero">Телефон *</Label>
                      <Input
                        id="phone-hero"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 999 123-45-67"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="goal-hero">Ваша цель</Label>
                      <Textarea
                        id="goal-hero"
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
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="PlayCircle" className="mr-2" />
                Как это работает
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-sm text-muted-foreground">Участников</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">-8 кг</div>
                <div className="text-sm text-muted-foreground">Средний результат</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right -mt-8 md:-mt-16 md:ml-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/826d22bd-71c0-4640-b2a0-b41dcc66c78c.jpg"
              alt="Минус 32 кг - реальный результат"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};