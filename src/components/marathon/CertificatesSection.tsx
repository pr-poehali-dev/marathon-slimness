import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const CertificatesSection = () => {
  const certificates = [
    {
      icon: 'Award',
      title: 'Сертифицированный нутрициолог',
      organization: 'Международная академия здоровья',
      year: '2021',
      description: 'Специализация: правильное питание и диетология'
    },
    {
      icon: 'GraduationCap',
      title: 'Диплом фитнес-тренера',
      organization: 'Высшая школа спорта',
      year: '2019',
      description: 'Квалификация: персональный тренер категории А'
    },
    {
      icon: 'Heart',
      title: 'Психология снижения веса',
      organization: 'Институт психологии здоровья',
      year: '2022',
      description: 'Работа с пищевым поведением и мотивацией'
    },
    {
      icon: 'FileCheck',
      title: 'Спортивная медицина',
      organization: 'Медицинский университет',
      year: '2020',
      description: 'Безопасность тренировок и профилактика травм'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-white border-0">
            Квалификация
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Профессиональная подготовка
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Программа разработана сертифицированными специалистами с многолетним опытом
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <Card 
              key={idx} 
              className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={cert.icon as any} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.organization} • {cert.year}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
            <Icon name="ShieldCheck" className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Все специалисты имеют действующие сертификаты и лицензии
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
