import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Challenge {
  week: number;
  title: string;
  description: string;
  tasks: string[];
}

interface ProgramSectionProps {
  challenges: Challenge[];
  activeChallenge: number | null;
  setActiveChallenge: (week: number | null) => void;
}

export const ProgramSection = ({
  challenges,
  activeChallenge,
  setActiveChallenge
}: ProgramSectionProps) => {
  return (
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
  );
};
