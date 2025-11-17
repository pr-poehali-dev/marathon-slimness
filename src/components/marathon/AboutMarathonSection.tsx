import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'Salad',
    title: 'Сбалансированное питание под руководством опытного диетолога',
    description: 'Никаких экстремальных диет! Только индивидуально подобранный рацион, учитывающий ваши потребности и предпочтения, с акцентом на здоровые и вкусные продукты. Мы поможем вам разобраться в принципах здорового питания и научим готовить полезные блюда, которые приносят удовольствие.'
  },
  {
    icon: 'Dumbbell',
    title: 'Мягкие и эффективные тренировки',
    description: 'Подберем упражнения, которые подходят именно вам, с учетом вашего уровня подготовки и физических ограничений. Забудьте об изнурительных тренировках в спортзале! Мы покажем, как двигаться с удовольствием и получать пользу для тела и души.'
  },
  {
    icon: 'Heart',
    title: 'Поддержка психолога, специализирующегося на РПП',
    description: 'Мы понимаем, что похудение может быть сложным эмоциональным процессом, особенно если в прошлом были проблемы с пищевым поведением. Наш психолог поможет вам справиться с негативными мыслями, сформировать здоровое отношение к еде и своему телу, а также научиться любить и принимать себя таким, какой вы есть.'
  },
  {
    icon: 'Users',
    title: 'Сообщество единомышленников',
    description: 'Поддержка и мотивация от других участниц марафона, которые разделяют ваши цели и стремления. Вместе мы создадим атмосферу доверия и принятия, где каждая сможет чувствовать себя комфортно и безопасно.'
  }
];

export const AboutMarathonSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-white border-0">
            Как проходит марафон
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Новогодний Баланс</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Онлайн-марафон стройности, созданный с заботой о вашем физическом и психологическом здоровье. 
            Мы предлагаем не просто диету и тренировки, а комплексный подход к преображению, который включает:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40"
            >
              <CardContent className="p-8">
                <div className="flex flex-col">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30">
            <CardContent className="p-8">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
              <p className="text-xl text-black font-semibold max-w-3xl mx-auto leading-relaxed">
                Марафон "Новогодний Баланс" – это ваш путь к здоровому телу и душевному равновесию. 
                Встречайте Новый Год с уверенностью в себе и любовью к своему телу!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
