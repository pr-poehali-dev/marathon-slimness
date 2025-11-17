import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FormatItem {
  icon: string;
  title: string;
  description: string;
}

const formatItems: FormatItem[] = [
  {
    icon: 'MessageCircle',
    title: 'Онлайн-платформа',
    description: 'Закрытая группа в WhatsApp для общения, поддержки и обмена опытом с участниками.'
  },
  {
    icon: 'FolderOpen',
    title: 'Личный кабинет',
    description: 'С доступом к материалам, расписанию, рецептам и тренировкам.'
  },
  {
    icon: 'CheckSquare',
    title: 'Ежедневные задания и отчеты',
    description: 'Для поддержания мотивации и контроля.'
  }
];

export const FormatSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">Формат марафона</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Как проходит марафон</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё продумано для вашего удобства и максимального результата
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {formatItems.map((item, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};