import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const CertificatesSection = () => {
  const certificates = [
    {
      image: 'https://cdn.poehali.dev/files/900617c3-f39b-4919-96be-cd51ac0d2072.jpg',
      title: 'Диплом о профессиональной переподготовке',
      organization: 'Диетолог-консультант',
      year: '2021',
      description: 'Квалификация по программе профессиональной переподготовки'
    },
    {
      image: 'https://cdn.poehali.dev/files/5b7559ce-e2e0-4b82-bf4d-089964d8e112.jpg',
      title: 'Сертификат НИПО',
      organization: 'Национальный институт профессионального образования',
      year: '2021',
      description: 'Диетолог-консультант, 520 часов обучения'
    },
    {
      image: 'https://cdn.poehali.dev/files/35f4770d-5fef-47d7-bc15-2a8b3068c7e7.jpg',
      title: 'Сертификат Puzzle Brain',
      organization: 'РПП: расстройства пищевого поведения',
      year: '2022',
      description: 'Курс по работе с пищевым поведением'
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
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <Card 
              key={idx} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  {cert.organization}
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  {cert.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
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