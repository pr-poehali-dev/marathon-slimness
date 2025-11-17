import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Principle {
  icon: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: 'Apple',
    title: 'Здоровое питание',
    description: 'Никаких экстремальных диет! Акцент на сбалансированном питании, богатом овощами, фруктами, белками и полезными жирами.'
  },
  {
    icon: 'Dumbbell',
    title: 'Умеренные тренировки',
    description: 'Подбор упражнений, подходящих для разного уровня подготовки. Никаких изнурительных марафонов в спортзале.'
  },
  {
    icon: 'Heart',
    title: 'Поддержка и мотивация',
    description: 'Ежедневная поддержка, общение в группе, ответы на вопросы диетолога и тренера.'
  },
  {
    icon: 'Smile',
    title: 'Позитивный настрой',
    description: 'Фокус на удовольствии от процесса, а не на жестких ограничениях.'
  },
  {
    icon: 'TrendingUp',
    title: 'Постепенные изменения',
    description: 'Внедрение здоровых привычек, которые останутся с вами после окончания марафона.'
  }
];

export const PrinciplesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
            Наш подход
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Основные принципы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы верим в здоровое и комфортное преображение без стресса и жертв
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={principle.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
