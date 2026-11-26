import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  BookOpen,
  Heart,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Lightbulb,
  GraduationCap,
  Link2,
  Clock,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '500+', label: 'Наставников', icon: Users },
    { number: '2000+', label: 'Подопечных', icon: Heart },
    { number: '15', label: 'Лет опыта', icon: Award },
    { number: '98%', label: 'Довольных', icon: Star },
  ];

  const programs = [
    {
      title: 'Профессиональное наставничество',
      description: 'Индивидуальное сопровождение специалистов на пути карьерного роста. Развитие ключевых компетенций и лидерских качеств.',
      icon: Target,
      color: 'from-blue-500 to-blue-700',
      features: ['Карьерное планирование', 'Развитие soft skills', 'Менторские сессии']
    },
    {
      title: 'Наставничество для молодёжи',
      description: 'Поддержка молодых специалистов и студентов в начале профессионального пути. Формирование уверенности и навыков.',
      icon: GraduationCap,
      color: 'from-emerald-500 to-emerald-700',
      features: ['Профориентация', 'Адаптация в коллективе', 'Личностный рост']
    },
    {
      title: 'Корпоративные программы',
      description: 'Разработка и внедрение программ наставничества для организаций. Повышение эффективности команд.',
      icon: Link2,
      color: 'from-purple-500 to-purple-700',
      features: ['Диагностика потребностей', 'Обучение наставников', 'Оценка результатов']
    },
    {
      title: 'Образовательные проекты',
      description: 'Обучающие программы и тренинги для действующих и будущих наставников. Лучшие практики менторства.',
      icon: BookOpen,
      color: 'from-amber-500 to-amber-700',
      features: ['Тренинги', 'Мастер-классы', 'Сертификация']
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Проверенные методики',
      description: 'Используем научно обоснованные подходы к наставничеству, разработанные ведущими экспертами.'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Все наши наставники проходят строгий отбор и регулярное повышение квалификации.'
    },
    {
      icon: TrendingUp,
      title: 'Измеримые результаты',
      description: 'Отслеживаем прогресс каждого участника и гарантируем достижение поставленных целей.'
    },
    {
      icon: Lightbulb,
      title: 'Индивидуальный подход',
      description: 'Каждая программа адаптируется под уникальные потребности и цели участника.'
    },
    {
      icon: Clock,
      title: 'Гибкий формат',
      description: 'Очные и онлайн встречи, удобный график — обучение без отрыва от работы.'
    },
    {
      icon: Globe,
      title: 'Широкая сеть',
      description: 'Сообщество наставников из различных отраслей и регионов для максимального охвата.'
    },
  ];

  const team = [
    {
      name: 'Алексей Петров',
      role: 'Руководитель штаба',
      experience: '20 лет в наставничестве',
      specialty: 'Стратегическое развитие',
      initials: 'АП'
    },
    {
      name: 'Мария Иванова',
      role: 'Главный методист',
      experience: '15 лет в образовании',
      specialty: 'Программы обучения',
      initials: 'МИ'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Координатор проектов',
      experience: '12 лет в управлении',
      specialty: 'Корпоративные программы',
      initials: 'ДК'
    },
    {
      name: 'Елена Сидорова',
      role: 'Ведущий наставник',
      experience: '18 лет в менторстве',
      specialty: 'Карьерное развитие',
      initials: 'ЕС'
    },
  ];

  const faqs = [
    {
      question: 'Как стать наставником?',
      answer: 'Заполните заявку на нашем сайте, пройдите собеседование и обучение. Мы принимаем специалистов с опытом работы от 5 лет в своей области.'
    },
    {
      question: 'Сколько длится программа наставничества?',
      answer: 'Стандартная программа длится от 3 до 12 месяцев в зависимости от целей и формата. Мы подбираем оптимальный срок индивидуально.'
    },
    {
      question: 'Какие форматы работы доступны?',
      answer: 'Мы предлагаем очные встречи, онлайн-сессии, групповые мастермайнды и комбинированные форматы. Выбор зависит от программы и предпочтений участников.'
    },
    {
      question: 'Есть ли стоимость участия?',
      answer: 'Для подопечных участие в базовых программах бесплатно. Корпоративные программы и расширенное сопровождение оплачиваются организациями.'
    },
    {
      question: 'Как подбирается наставник?',
      answer: 'Мы учитываем профессиональную область, цели, личностные характеристики и предпочтения по формату общения для оптимального подбора пары.'
    },
  ];

  const steps = [
    { step: '01', title: 'Заявка', description: 'Заполните форму и расскажите о своих целях' },
    { step: '02', title: 'Подбор', description: 'Мы подберём наставника под ваши задачи' },
    { step: '03', title: 'Старт', description: 'Первая встреча и определение плана работы' },
    { step: '04', title: 'Результат', description: 'Достижение целей и развитие навыков' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#hero"
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scrolled ? 'bg-primary' : 'bg-accent'}`}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className={`font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>
                ШТАБ НАСТАВНИКОВ
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {['О нас', 'Программы', 'Преимущества', 'Команда', 'FAQ', 'Контакты'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                  className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#контакты"
                className="btn-primary text-sm py-2.5 px-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                Стать наставником
              </motion.a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-primary' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-primary' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {['О нас', 'Программы', 'Преимущества', 'Команда', 'FAQ', 'Контакты'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="block text-gray-700 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a href="#контакты" className="btn-primary inline-block text-center w-full mt-4">
                  Стать наставником
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium">Объединяем опытных с начинающими</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  ШТАБ
                  <br />
                  <span className="text-gradient">НАСТАВНИКОВ</span>
                </h1>
                <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                  Развиваем потенциал людей через систему профессионального наставничества. 
                  Помогаем расти специалистам, формировать лидеров и создавать сильные команды.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#программы" className="btn-primary flex items-center gap-2">
                    Наши программы <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#онас" className="btn-outline">
                    Узнать больше
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="glass-card rounded-2xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Users className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Активное сообщество</p>
                      <p className="text-white/60 text-sm">Более 500 наставников в сети</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Результативность</p>
                      <p className="text-white/60 text-sm">98% участников достигают целей</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Award className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Признание</p>
                      <p className="text-white/60 text-sm">Лучший проект наставничества 2024</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-primary counter-number">{stat.number}</p>
                <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="онас" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="section-divider mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                О Штабе Наставников
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Штаб Наставников — это объединение профессионалов, которые верят в силу передачи опыта. 
                Мы создаём среду, где знания и мудрость старших коллег помогают молодым специалистам 
                расти быстрее и увереннее.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Наша миссия — формировать культуру наставничества в организациях и обществе, 
                развивать лидерские качества и создавать устойчивые связи между поколениями профессионалов.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Индивидуальный подход',
                  'Проверенные методики',
                  'Поддержка 24/7',
                  'Сообщество экспертов'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <Target className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                  <p className="text-white/80 leading-relaxed">
                    Сделать наставничество доступным и эффективным инструментом развития для каждого 
                    специалиста. Мы верим, что передача опыта — это ключ к устойчивому развитию 
                    общества и экономики.
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-3xl font-bold text-accent">2010</p>
                        <p className="text-white/60 text-sm mt-1">Год основания</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-accent">50+</p>
                        <p className="text-white/60 text-sm mt-1">Регионов России</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="программы" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Наши программы</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Комплексные программы наставничества для различных целей и аудиторий
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="преимущества" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Наши преимущества, которые делают сотрудничество эффективным и комфортным
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.title}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <adv.icon className="w-6 h-6 text-accent-dark" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Как это работает</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до результата
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/30 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="команда" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Наша команда</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Опытные профессионалы, которые руководят процессом наставничества
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent-dark text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs mb-1">{member.experience}</p>
                <p className="text-gray-400 text-xs">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Готовы стать наставником?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Присоединяйтесь к нашему сообществу и помогайте другим расти. 
              Передавайте свой опыт и получайте признание.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#контакты" className="btn-primary flex items-center gap-2">
                Оставить заявку <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#программы" className="btn-outline">
                Узнать подробнее
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Частые вопросы</h2>
            <p className="text-gray-500">
              Ответы на самые популярные вопросы о нашем проекте
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="section-divider mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Готовы начать путь наставничества? Оставьте заявку или свяжитесь с нами 
                любым удобным способом. Мы ответим в течение 24 часов.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Телефон</p>
                    <p className="font-semibold text-primary">+7 (800) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-primary">info@shtab-nastavnikov.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Адрес</p>
                    <p className="font-semibold text-primary">Москва, ул. Наставников, д. 15</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <form className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-6">Оставить заявку</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="ivan@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите о себе и ваших целях..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    Отправить заявку
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">ШТАБ НАСТАВНИКОВ</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Объединяем профессионалов для передачи опыта и развития нового поколения лидеров. 
                Вместе мы создаём будущее.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-3">
                {['О нас', 'Программы', 'Преимущества', 'Команда', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="text-white/60 hover:text-accent transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li>+7 (800) 123-45-67</li>
                <li>info@shtab-nastavnikov.ru</li>
                <li>Москва, ул. Наставников, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Штаб Наставников. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
