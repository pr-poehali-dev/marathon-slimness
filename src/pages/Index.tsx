import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { HeroSection } from '@/components/marathon/HeroSection';
import { PrinciplesSection } from '@/components/marathon/PrinciplesSection';
import { FormatSection } from '@/components/marathon/FormatSection';
import { CertificatesSection } from '@/components/marathon/CertificatesSection';
import { ProgramSection } from '@/components/marathon/ProgramSection';
import { ResultsAndTestimonials } from '@/components/marathon/ResultsAndTestimonials';
import { FAQAndContacts } from '@/components/marathon/FAQAndContacts';

const Index = () => {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: ''
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);

    try {
      const response = await fetch('https://functions.poehali.dev/12613b67-d48e-401e-9684-944b691f0248', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: '🎉 Поздравляем!',
          description: 'Вы успешно зарегистрированы на марафон. Скоро с вами свяжутся!',
        });
        setFormData({ name: '', email: '', phone: '', goal: '' });
        setDialogOpen(false);
      } else {
        throw new Error(data.error || 'Registration failed');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось зарегистрироваться. Попробуйте еще раз.',
        variant: 'destructive',
      });
    } finally {
      setIsRegistering(false);
    }
  };

  const challenges = [
    {
      week: 1,
      title: 'Начало пути',
      description: 'Знакомство с программой, постановка целей, первые шаги',
      tasks: ['Замеры и фото', 'План питания', 'Первая тренировка']
    },
    {
      week: 2,
      title: 'Вхождение в ритм',
      description: 'Формирование привычек, увеличение нагрузки',
      tasks: ['Водный баланс', 'Кардио 3 раза', 'Дневник питания']
    },
    {
      week: 3,
      title: 'Прорыв границ',
      description: 'Повышение интенсивности, работа над слабыми зонами',
      tasks: ['Силовые тренировки', 'Планка 2 минуты', 'Новые рецепты']
    },
    {
      week: 4,
      title: 'Финальный рывок',
      description: 'Закрепление результатов, итоговые замеры',
      tasks: ['Контрольные замеры', 'Фото до/после', 'Планирование поддержки']
    }
  ];

  const results = [
    {
      name: 'Минус 35 кг',
      result: '-35 кг',
      image: 'https://cdn.poehali.dev/files/86079c45-3930-4f6d-a460-8d3f886cb5cd.jpg',
      testimonial: 'Невероятная трансформация! Я снова полюбила себя и жизнь!'
    },
    {
      name: 'Минус 30 кг',
      result: '-30 кг',
      image: 'https://cdn.poehali.dev/files/2a3ca003-cc75-4d70-a5e7-195a3f2fae9d.jpg',
      testimonial: 'Марафон изменил не только мое тело, но и отношение к себе'
    },
    {
      name: 'Победа над собой',
      result: 'Лучшая версия себя',
      image: 'https://cdn.poehali.dev/files/90ea2cbf-f801-4925-95cf-532bbf49b896.jpg',
      testimonial: 'Я доказала себе, что могу все! Спасибо за веру в меня!'
    }
  ];

  const testimonials = [
    {
      name: 'Ольга С.',
      text: 'Это было невероятно! Каждый день получала мотивацию и поддержку. Сообщество - это сила!',
      avatar: '👩‍🦰'
    },
    {
      name: 'Дарья П.',
      text: 'Челленджи заставляли выходить из зоны комфорта. Результаты превзошли все ожидания!',
      avatar: '👩'
    },
    {
      name: 'Светлана В.',
      text: 'Я нашла единомышленников и друзей. Вместе мы достигли невозможного!',
      avatar: '👱‍♀️'
    }
  ];

  const faqItems = [
    {
      question: 'Подходит ли марафон новичкам?',
      answer: 'Да! Программа адаптирована под любой уровень подготовки. Мы предоставим несколько вариантов упражнений - от начального до продвинутого уровня.'
    },
    {
      question: 'Сколько времени нужно уделять тренировкам?',
      answer: 'Минимум 30-40 минут в день. Программа гибкая - вы можете заниматься в удобное время.'
    },
    {
      question: 'Нужно ли специальное оборудование?',
      answer: 'Базовые упражнения можно выполнять дома без оборудования. Для дополнительных упражнений пригодятся гантели и коврик.'
    },
    {
      question: 'Как работает поддержка сообщества?',
      answer: 'Вы получите доступ к закрытой группе ВКонтакте, где сможете общаться с участниками, делиться результатами и получать мотивацию каждый день.'
    },
    {
      question: 'Что делать, если пропустил день?',
      answer: 'Не переживайте! Просто продолжайте с текущего дня. Главное - не останавливаться и двигаться к цели.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Award" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">
              Марафон Стройности
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Записаться</Button>
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
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 999 123-45-67"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="goal">Ваша цель</Label>
                  <Textarea
                    id="goal"
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
      </header>

      <HeroSection
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isRegistering={isRegistering}
      />

      <PrinciplesSection />

      <FormatSection />

      <CertificatesSection />

      <ProgramSection
        challenges={challenges}
        activeChallenge={activeChallenge}
        setActiveChallenge={setActiveChallenge}
      />

      <ResultsAndTestimonials
        results={results}
        testimonials={testimonials}
      />

      <FAQAndContacts
        faqItems={faqItems}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isRegistering={isRegistering}
      />
    </div>
  );
};

export default Index;