import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

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
      name: 'Анна М.',
      result: '-8 кг за месяц',
      image: 'https://cdn.poehali.dev/projects/4992dd00-930e-4f8b-b47e-f0d618949f45/files/dd57240e-1ee3-4f4b-8ead-6e930a28cc89.jpg',
      testimonial: 'Я не верила, что смогу! Но поддержка команды и челленджи помогли не сдаться'
    },
    {
      name: 'Екатерина Л.',
      result: '-12 кг за 2 месяца',
      image: 'https://cdn.poehali.dev/projects/4992dd00-930e-4f8b-b47e-f0d618949f45/files/dd57240e-1ee3-4f4b-8ead-6e930a28cc89.jpg',
      testimonial: 'Марафон изменил не только мое тело, но и отношение к себе'
    },
    {
      name: 'Мария К.',
      result: '-6 кг за месяц',
      image: 'https://cdn.poehali.dev/projects/4992dd00-930e-4f8b-b47e-f0d618949f45/files/dd57240e-1ee3-4f4b-8ead-6e930a28cc89.jpg',
      testimonial: 'Впервые за долгое время я чувствую себя легкой и энергичной!'
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
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
              <Button className="animate-pulse-scale">Присоединиться</Button>
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                Старт через 3 дня!
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Преврати свою{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  мечту
                </span>
                {' '}в реальность
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Присоединяйся к марафону стройности! Получай ежедневные челленджи, мотивационные материалы и поддержку сообщества
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
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/4992dd00-930e-4f8b-b47e-f0d618949f45/files/5b02eeeb-646b-47a4-a75f-3d9c48552f12.jpg"
                alt="Фитнес мотивация"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Программа марафона</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">4 недели челленджей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая неделя - это новый уровень, новые задачи и новые достижения
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <Card 
                key={challenge.week}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeChallenge === challenge.week ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveChallenge(activeChallenge === challenge.week ? null : challenge.week)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {challenge.week}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground mb-4">{challenge.description}</p>
                      {activeChallenge === challenge.week && (
                        <div className="space-y-2 animate-fade-in">
                          <div className="font-semibold text-sm mb-2">Задачи недели:</div>
                          {challenge.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Icon name="CheckCircle2" size={16} className="text-primary" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <Icon 
                      name={activeChallenge === challenge.week ? "ChevronUp" : "ChevronDown"}
                      className="text-muted-foreground"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent text-white border-0">
              Результаты участников
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Они смогли. И ты сможешь!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории реальных людей, которые изменили свою жизнь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={result.image}
                    alt={result.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-primary font-bold text-lg px-4 py-2">
                      {result.result}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                  <p className="text-muted-foreground italic">"{result.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят участники</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://vk.com/yuliya_pp?from=groups', '_blank')}
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
    </div>
  );
};

export default Index;