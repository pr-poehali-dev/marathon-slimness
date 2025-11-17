import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Result {
  name: string;
  result: string;
  image: string;
  testimonial: string;
}

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

interface ResultsAndTestimonialsProps {
  results: Result[];
  testimonials: Testimonial[];
}

export const ResultsAndTestimonials = ({
  results,
  testimonials
}: ResultsAndTestimonialsProps) => {
  return (
    <>
      <section id="results" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white border-0">
              Результаты участников
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Доказанные результаты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории реальных людей, которые изменили свою жизнь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={result.image}
                    alt={result.name}
                    className="w-full h-full object-cover"
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
    </>
  );
};