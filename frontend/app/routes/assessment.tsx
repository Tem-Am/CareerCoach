import { useState } from "react";
import { Button } from "../../components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { Progress } from "../../components/progress";
import { Badge } from "../../components/badge";
import { RadioGroup, RadioGroupItem } from "../../components/radio-group";
import { Label } from "../../components/label";
import { Slider } from "../../components/slider";
import { Checkbox } from "../../components/checkbox";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/sheet";
import { Separator } from "../../components/separator";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Brain,
  Target,
  Star,
  Lightbulb,
  BookOpen,
  Users,
  Code,
  Palette,
  TrendingUp,
  Heart,
  Clock,
  Save,
  HelpCircle,
  FileDown,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  GraduationCap,
  Briefcase,
  DollarSign,
  MapPin,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router";

// It says that assessment quiz props has onComplete and onBack functions
// onComplete props that function recieve the data
// onBack is function with no input
interface AssessmentQuizProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export const loader = () => {
  return null; // prevents GET error
};

export default function Assessment() {
  // This returns the AssessmentQuiz component directly for simplicity
  return <AssessmentQuiz onComplete={() => {}} onBack={() => {}} />;
}

export function AssessmentQuiz({ onComplete, onBack }: AssessmentQuizProps) {
  // State to track current question, answers, and progress
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);

  const questions = [
    // Identity & Context Section
    {
      id: "age-range",
      section: "Identity & Context",
      type: "mcq",
      category: "Background",
      icon: <GraduationCap className="h-5 w-5" />,
      question: "What is your age range?",
      description: "This helps us tailor recommendations to your career stage.",
      help: "Different age ranges often have different career priorities and opportunities. Be honest to get the most relevant recommendations.",
      options: [
        { value: "under-18", label: "Under 18", emoji: "👶" },
        { value: "18-22", label: "18-22", emoji: "🎓" },
        { value: "23-29", label: "23-29", emoji: "💼" },
        { value: "30+", label: "30+", emoji: "👔" },
      ],
    },
    {
      id: "education-level",
      section: "Identity & Context",
      type: "mcq",
      category: "Background",
      icon: <BookOpen className="h-5 w-5" />,
      question: "What is your current education level?",
      description: "Help us understand your educational background.",
      help: "Your education level helps us recommend appropriate career paths and skill development resources.",
      options: [
        { value: "high-school", label: "High school", emoji: "🏫" },
        { value: "some-college", label: "Some college", emoji: "📚" },
        { value: "bachelors", label: "Bachelor's degree", emoji: "🎓" },
        { value: "masters", label: "Master's degree", emoji: "👨‍🎓" },
        { value: "phd", label: "PhD", emoji: "🔬" },
        { value: "other", label: "Other", emoji: "📖" },
      ],
    },
    {
      id: "available-time",
      section: "Identity & Context",
      type: "mcq",
      category: "Background",
      icon: <Clock className="h-5 w-5" />,
      question: "How much time can you dedicate to learning new skills?",
      description:
        "Understanding your availability helps us create realistic career roadmaps.",
      help: "Be realistic about your time commitment. This affects the timeline for career transition recommendations.",
      options: [
        {
          value: "full-time",
          label: "Full-time (40+ hours/week)",
          emoji: "⏰",
        },
        {
          value: "part-time",
          label: "Part-time (20-40 hours/week)",
          emoji: "🕐",
        },
        {
          value: "nights-weekends",
          label: "Nights & weekends (5-15 hours/week)",
          emoji: "🌙",
        },
        { value: "flexible", label: "Flexible schedule", emoji: "✨" },
      ],
    },

    // Interests & Preferences Section
    {
      id: "exciting-activities",
      section: "Interests & Preferences",
      type: "multi-select",
      category: "Interests",
      icon: <Sparkles className="h-5 w-5" />,
      question: "Which of these activities excite you?",
      description:
        "Select all that apply. Your interests help us match you with fulfilling careers.",
      help: 'Choose activities that genuinely excite you, not what you think you "should" like. There are no wrong answers!',
      minSelect: 2,
      options: [
        { value: "coding", label: "Coding", emoji: "💻" },
        { value: "design", label: "Design", emoji: "🎨" },
        { value: "customers", label: "Talking with customers", emoji: "💬" },
        { value: "data-analysis", label: "Analyzing data", emoji: "📊" },
        { value: "writing", label: "Writing", emoji: "✍️" },
        { value: "building", label: "Hands-on building", emoji: "🔨" },
        { value: "teaching", label: "Teaching", emoji: "👨‍🏫" },
        { value: "research", label: "Research", emoji: "🔬" },
      ],
    },
    {
      id: "work-setting",
      section: "Interests & Preferences",
      type: "mcq",
      category: "Work Environment",
      icon: <Briefcase className="h-5 w-5" />,
      question: "What is your preferred work setting?",
      description: "Where do you see yourself thriving professionally?",
      help: "Different work environments have different cultures, pace, and opportunities. Choose what aligns with your personality.",
      options: [
        {
          value: "startup",
          label: "Startup",
          emoji: "🚀",
          description: "Fast-paced, wear many hats",
        },
        {
          value: "large-company",
          label: "Large company",
          emoji: "🏢",
          description: "Structured, specialized roles",
        },
        {
          value: "academia",
          label: "Academia",
          emoji: "🎓",
          description: "Research-focused, teaching",
        },
        {
          value: "freelance",
          label: "Freelance",
          emoji: "💼",
          description: "Independent, flexible",
        },
        {
          value: "government",
          label: "Government",
          emoji: "🏛️",
          description: "Public service, stable",
        },
        {
          value: "nonprofit",
          label: "Non-profit",
          emoji: "❤️",
          description: "Mission-driven, social impact",
        },
      ],
    },

    // Skills & Experience Section - Programming Skills
    {
      id: "programming-skills",
      section: "Skills & Experience",
      type: "skill-rating",
      category: "Technical Skills",
      icon: <Code className="h-5 w-5" />,
      question: "Rate your programming & technical skills",
      description:
        "Rate each skill from 1 (beginner) to 5 (expert). Select N/A if not applicable.",
      help: "Be honest about your skill levels. 1 = Just starting, 3 = Can work independently, 5 = Expert who can teach others.",
      skills: [
        {
          name: "Python",
          key: "python",
          description: "General-purpose programming",
        },
        {
          name: "JavaScript",
          key: "javascript",
          description: "Web development",
        },
        { name: "SQL", key: "sql", description: "Database queries" },
        {
          name: "C++/Java",
          key: "compiled-lang",
          description: "System programming",
        },
        {
          name: "Linux/Unix",
          key: "linux",
          description: "Command line, servers",
        },
      ],
    },

    // Skills & Experience Section - Soft Skills
    {
      id: "soft-skills",
      section: "Skills & Experience",
      type: "skill-rating",
      category: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      question: "Rate your soft skills",
      description: "How confident are you in these essential workplace skills?",
      help: "Soft skills are often as important as technical skills. Consider feedback you've received from others.",
      skills: [
        {
          name: "Communication",
          key: "communication",
          description: "Written & verbal",
        },
        {
          name: "Project Management",
          key: "project-mgmt",
          description: "Planning & coordination",
        },
        {
          name: "Critical Thinking",
          key: "critical-thinking",
          description: "Problem analysis",
        },
        {
          name: "Leadership",
          key: "leadership",
          description: "Team guidance & motivation",
        },
        {
          name: "Collaboration",
          key: "collaboration",
          description: "Teamwork & cooperation",
        },
      ],
    },

    // Domain Knowledge
    {
      id: "domain-knowledge",
      section: "Skills & Experience",
      type: "multi-select",
      category: "Domain Expertise",
      icon: <Brain className="h-5 w-5" />,
      question: "Which domains do you have knowledge or experience in?",
      description: "Select all industries/domains you're familiar with.",
      help: "Domain knowledge can be from work, education, or personal interest. It's valuable for specialized career paths.",
      minSelect: 1,
      options: [
        { value: "healthcare", label: "Healthcare", emoji: "🏥" },
        { value: "finance", label: "Finance", emoji: "💰" },
        { value: "education", label: "Education", emoji: "📚" },
        { value: "retail", label: "Retail & E-commerce", emoji: "🛍️" },
        { value: "embedded", label: "Embedded Systems", emoji: "🔧" },
        { value: "cloud", label: "Cloud Computing", emoji: "☁️" },
        { value: "gaming", label: "Gaming", emoji: "🎮" },
        { value: "ai-ml", label: "AI & Machine Learning", emoji: "🤖" },
      ],
    },

    // Personality & Values Section
    {
      id: "work-structure",
      section: "Personality & Values",
      type: "likert",
      category: "Work Style",
      icon: <Target className="h-5 w-5" />,
      question: "How do you prefer to work?",
      description: "Rate your preference on these work style dimensions.",
      help: "There are no right answers. Understanding your preferences helps match you with compatible work environments.",
      scales: [
        {
          key: "task-structure",
          leftLabel: "Prefer structured tasks",
          rightLabel: "Prefer open-ended problems",
          leftEmoji: "📋",
          rightEmoji: "🎨",
        },
        {
          key: "stability-novelty",
          leftLabel: "Value stability",
          rightLabel: "Value novelty",
          leftEmoji: "🏛️",
          rightEmoji: "🚀",
        },
        {
          key: "focus-switching",
          leftLabel: "Long-term deep focus",
          rightLabel: "Switching tasks frequently",
          leftEmoji: "🎯",
          rightEmoji: "⚡",
        },
        {
          key: "individual-team",
          leftLabel: "Work independently",
          rightLabel: "Work in teams",
          leftEmoji: "🧑",
          rightEmoji: "👥",
        },
      ],
    },

    // Career Goals & Constraints
    {
      id: "career-goal",
      section: "Career Goals",
      type: "textarea",
      category: "Goals",
      icon: <Target className="h-5 w-5" />,
      question: "What is your primary career goal?",
      description:
        "Describe what you want to achieve in your career (2-3 sentences).",
      help: 'Examples: "Build products that help people", "Become a research scientist in AI", "Lead engineering teams", "Start my own business"',
      placeholder:
        "E.g., I want to build products that solve real-world problems and eventually lead a product team at a tech company...",
    },
    {
      id: "salary-range",
      section: "Career Goals",
      type: "mcq",
      category: "Compensation",
      icon: <DollarSign className="h-5 w-5" />,
      question: "What is your desired salary range?",
      description:
        "This helps us recommend careers that match your financial goals.",
      help: "Consider your experience level and local market. Entry-level roles typically pay less but offer growth potential.",
      options: [
        { value: "entry", label: "Entry-level ($40K - $60K)", emoji: "💵" },
        { value: "mid", label: "Mid-level ($60K - $100K)", emoji: "💰" },
        { value: "senior", label: "Senior ($100K - $150K)", emoji: "💎" },
        { value: "executive", label: "Executive ($150K+)", emoji: "👑" },
        { value: "flexible", label: "Flexible/Open", emoji: "🤷" },
      ],
    },
    {
      id: "location-constraints",
      section: "Career Goals",
      type: "mcq",
      category: "Location",
      icon: <MapPin className="h-5 w-5" />,
      question: "What are your location preferences?",
      description: "Where do you want to work?",
      help: "Remote work has expanded opportunities, but some careers require on-site presence.",
      options: [
        { value: "remote", label: "Remote only", emoji: "🏠" },
        { value: "hybrid", label: "Hybrid (remote + office)", emoji: "🔄" },
        { value: "local", label: "Local area only", emoji: "📍" },
        { value: "relocate", label: "Willing to relocate", emoji: "✈️" },
        { value: "flexible", label: "Flexible/Open", emoji: "🌍" },
      ],
    },

    // Motivation & Learning
    {
      id: "learning-style",
      section: "Motivation & Learning",
      type: "mcq",
      category: "Learning",
      icon: <Lightbulb className="h-5 w-5" />,
      question: "What is your preferred learning style?",
      description: "How do you learn best?",
      help: "Knowing your learning style helps us recommend the right educational resources for your career transition.",
      options: [
        {
          value: "self-study",
          label: "Self-study (books, online courses)",
          emoji: "📚",
        },
        {
          value: "bootcamp",
          label: "Bootcamp (intensive training)",
          emoji: "🎯",
        },
        { value: "university", label: "University/Formal degree", emoji: "🎓" },
        { value: "on-job", label: "On-the-job training", emoji: "💼" },
        { value: "mentorship", label: "Mentorship/Coaching", emoji: "👥" },
        { value: "mixed", label: "Mixed approach", emoji: "🔀" },
      ],
    },
    {
      id: "timeline",
      section: "Motivation & Learning",
      type: "mcq",
      category: "Timeline",
      icon: <Clock className="h-5 w-5" />,
      question: "How quickly do you want to transition careers?",
      description: "Be realistic about your timeline for career change.",
      help: "Career transitions take time. Rushing can lead to poor decisions, but too slow might lose momentum.",
      options: [
        {
          value: "now",
          label: "Immediately (actively job searching)",
          emoji: "🚀",
        },
        { value: "6-months", label: "Within 6 months", emoji: "⏱️" },
        { value: "1-2-years", label: "1-2 years", emoji: "📅" },
        {
          value: "3-plus",
          label: "3+ years (long-term planning)",
          emoji: "🎯",
        },
        { value: "exploring", label: "Just exploring options", emoji: "🔍" },
      ],
    },

    // Final Validation
    {
      id: "strengths",
      section: "Final Validation",
      type: "textarea",
      category: "Self-Assessment",
      icon: <Star className="h-5 w-5" />,
      question: "What are your biggest strengths?",
      description:
        "List 3-5 strengths that make you unique (skills, traits, experiences).",
      help: "Think about what others compliment you on, what comes naturally to you, or what you're known for.",
      placeholder:
        "E.g., Strong problem-solving skills, ability to explain complex topics simply, experience leading student projects...",
    },
    {
      id: "weaknesses",
      section: "Final Validation",
      type: "textarea",
      category: "Self-Assessment",
      icon: <HelpCircle className="h-5 w-5" />,
      question: "What are your biggest challenges or gaps?",
      description: "What obstacles or skill gaps do you need to address?",
      help: "Being honest about challenges helps us provide better recommendations. Common examples: lack of experience, need more technical skills, confidence issues.",
      placeholder:
        "E.g., Limited programming experience, no professional network in tech, struggle with time management...",
    },
  ];

  const sections = [
    "Identity & Context",
    "Interests & Preferences",
    "Skills & Experience",
    "Personality & Values",
    "Career Goals",
    "Motivation & Learning",
    "Final Validation",
  ];

  const getCurrentSection = () => {
    return questions[currentQuestion]?.section || "";
  };

  const getSectionProgress = () => {
    const currentSection = getCurrentSection();
    const sectionQuestions = questions.filter(
      (q) => q.section === currentSection
    );
    const currentIndexInSection = questions
      .slice(0, currentQuestion + 1)
      .filter((q) => q.section === currentSection).length;
    return { current: currentIndexInSection, total: sectionQuestions.length };
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Show summary before final completion
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSaveProgress = () => {
    // Save to localStorage
    localStorage.setItem(
      "careerAssessmentProgress",
      JSON.stringify({
        currentQuestion,
        answers,
        timestamp: new Date().toISOString(),
      })
    );
    setSavedProgress(true);
    toast.success("Progress saved! You can continue later.");
  };

  const handleComplete = () => {
    onComplete(answers);
    // Clear saved progress
    localStorage.removeItem("careerAssessmentProgress");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];

  const isAnswered = () => {
    if (currentAnswer === undefined || currentAnswer === null) return false;

    if (question.type === "multi-select") {
      return (
        Array.isArray(currentAnswer) &&
        currentAnswer.length >= (question.minSelect || 1)
      );
    }
    if (question.type === "textarea") {
      return (
        typeof currentAnswer === "string" && currentAnswer.trim().length > 10
      );
    }
    if (question.type === "skill-rating") {
      return Object.keys(currentAnswer || {}).length > 0;
    }
    if (question.type === "likert") {
      const scales = question.scales || [];
      return scales.every((scale) => currentAnswer?.[scale.key] !== undefined);
    }
    return true;
  };

  const renderQuestion = () => {
    switch (question.type) {
      case "mcq":
        return (
          <RadioGroup
            value={currentAnswer || ""}
            onValueChange={(value) => handleAnswerChange(question.id, value)}
            className="space-y-3"
          >
            {question.options?.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={`group relative flex items-start space-x-4 p-5 rounded-xl border-2 transition-all cursor-pointer ${
                    currentAnswer === option.value
                      ? "border-blue-500 bg-blue-50/50 shadow-md"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                  }`}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={`option-${index}`}
                    className="mt-1"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{option.emoji}</span>
                      <div className="flex-1">
                        <div className="font-medium">{option.label}</div>
                        {option.value && (
                          <div className="text-sm text-gray-500 mt-1">
                            {option.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </Label>
                  {currentAnswer === option.value && (
                    <CheckCircle className="h-5 w-5 text-blue-600 absolute top-5 right-5" />
                  )}
                </div>
              </motion.div>
            ))}
          </RadioGroup>
        );

      case "multi-select":
        const checkboxAnswers = currentAnswer || [];
        return (
          <div className="space-y-3">
            {question.minSelect && (
              <div className="text-sm text-gray-600 mb-4">
                Select at least {question.minSelect} option
                {question.minSelect > 1 ? "s" : ""}
                {checkboxAnswers.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {checkboxAnswers.length} selected
                  </Badge>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {question.options?.map((option, index) => {
                const isChecked = checkboxAnswers.includes(option.value);
                return (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <div
                      className={`group relative flex items-center space-x-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        isChecked
                          ? "border-blue-500 bg-blue-50/50 shadow-md"
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                      }`}
                      onClick={() => {
                        if (isChecked) {
                          handleAnswerChange(
                            question.id,
                            checkboxAnswers.filter(
                              (v: string) => v !== option.value
                            )
                          );
                        } else {
                          handleAnswerChange(question.id, [
                            ...checkboxAnswers,
                            option.value,
                          ]);
                        }
                      }}
                    >
                      <Checkbox
                        id={`checkbox-${index}`}
                        checked={isChecked}
                        className="pointer-events-none"
                      />
                      <Label
                        htmlFor={`checkbox-${index}`}
                        className="flex items-center gap-3 cursor-pointer flex-1"
                      >
                        <span className="text-2xl">{option.emoji}</span>
                        <span>{option.label}</span>
                      </Label>
                      {isChecked && (
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case "skill-rating":
        const skillAnswers = currentAnswer || {};
        return (
          <div className="space-y-5">
            {question.skills?.map((skill, index) => {
              const rating = skillAnswers[skill.key] || 0;
              return (
                <motion.div
                  key={skill.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <label className="font-medium text-base">
                        {skill.name}
                      </label>
                      {skill.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {skill.description}
                        </p>
                      )}
                    </div>
                    <Badge
                      variant={rating > 0 ? "default" : "outline"}
                      className="ml-4"
                    >
                      {rating === 0 ? "Not set" : `${rating}/5`}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <Slider
                      value={[rating]}
                      onValueChange={(value) =>
                        handleAnswerChange(question.id, {
                          ...skillAnswers,
                          [skill.key]: value[0],
                        })
                      }
                      min={0}
                      max={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>N/A</span>
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        );

      case "likert":
        const likertAnswers = currentAnswer || {};
        return (
          <div className="space-y-6">
            {question.scales?.map((scale, index) => {
              const value = likertAnswers[scale.key] || 3;
              return (
                <motion.div
                  key={scale.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">{scale.leftEmoji}</span>
                      <span className="text-gray-700">{scale.leftLabel}</span>
                    </div>
                    <Badge variant="outline">{value}</Badge>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">{scale.rightLabel}</span>
                      <span className="text-xl">{scale.rightEmoji}</span>
                    </div>
                  </div>
                  <Slider
                    value={[value]}
                    onValueChange={(val) =>
                      handleAnswerChange(question.id, {
                        ...likertAnswers,
                        [scale.key]: val[0],
                      })
                    }
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span key={num}>{num}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        );

      case "textarea":
        return (
          <div className="space-y-3">
            <Textarea
              value={currentAnswer || ""}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              placeholder={question.placeholder}
              className="min-h-[150px] text-base resize-none border-2 focus:border-blue-500"
            />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                {currentAnswer?.length || 0} characters
              </span>
              {(currentAnswer?.length || 0) < 10 && (
                <span className="text-orange-500">Minimum 10 characters</span>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const sectionProgress = getSectionProgress();

  // Summary View
  if (showSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="shadow-2xl bg-white/90 backdrop-blur-md border-0">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-3xl mb-2">
                  Assessment Complete! 🎉
                </CardTitle>
                <CardDescription className="text-lg">
                  Great job completing all {questions.length} questions. Here's
                  a summary of your responses.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {questions.length}
                    </div>
                    <div className="text-sm text-gray-600">
                      Questions Answered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      {sections.length}
                    </div>
                    <div className="text-sm text-gray-600">
                      Sections Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Profile Complete
                    </div>
                  </div>
                </div>

                {/* Quick Preview */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Quick Preview</h3>
                  <div className="grid gap-3">
                    {answers["exciting-activities"] &&
                      Array.isArray(answers["exciting-activities"]) && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-2">
                            Your Interests
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {answers["exciting-activities"].map(
                              (activity: string) => (
                                <Badge key={activity} variant="secondary">
                                  {activity}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    {answers["career-goal"] && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">
                          Your Career Goal
                        </div>
                        <p className="text-sm line-clamp-2">
                          {answers["career-goal"]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={handleComplete}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6"
                    size="lg"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    See My Career Matches
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowSummary(false)}
                      className="flex-1"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Review Answers
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        // Export logic
                        toast.success("Downloading your responses...");
                      }}
                      className="flex-1"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                {/* Feedback */}
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900 mb-1">
                        Was this assessment helpful?
                      </h4>
                      <div className="flex gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-amber-300"
                          onClick={() =>
                            toast.success("Thank you for your feedback!")
                          }
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Yes
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-amber-300"
                          onClick={() =>
                            toast.info(
                              "We appreciate your feedback and will improve!"
                            )
                          }
                        >
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          Could be better
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to={"../"} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Exit Assessment
            </Link>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSaveProgress}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Progress
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Assessment Help</SheetTitle>
                    <SheetDescription>
                      Tips and information to help you complete the assessment
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time Estimate
                      </h4>
                      <p className="text-sm text-gray-600">
                        This assessment takes approximately 15-20 minutes to
                        complete. You can save your progress and return anytime.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Be Honest
                      </h4>
                      <p className="text-sm text-gray-600">
                        Answer questions honestly based on your actual
                        preferences and abilities, not what you think sounds
                        impressive.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        No Wrong Answers
                      </h4>
                      <p className="text-sm text-gray-600">
                        There are no right or wrong answers. We're learning
                        about you to provide the best career recommendations.
                      </p>
                    </div>

                    {question.help && (
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-amber-600" />
                          Current Question Help
                        </h4>
                        <p className="text-sm text-gray-700">{question.help}</p>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  {getCurrentSection()}
                </Badge>
                <span className="text-gray-600">
                  Step {sectionProgress.current} of {sectionProgress.total}
                </span>
              </div>
              <span className="font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Card */}
            <Card className="mb-6 shadow-2xl bg-white/90 backdrop-blur-md border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                    {question.icon}
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="border-blue-300 text-blue-700"
                    >
                      {question.category}
                    </Badge>
                    <Badge variant="outline" className="text-gray-600">
                      Question {currentQuestion + 1}/{questions.length}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight mb-2">
                  {question.question}
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {question.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">{renderQuestion()}</CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-6 py-5"
                size="lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              {/* Progress Dots */}
              <div className="flex-1 flex justify-center gap-1.5">
                {questions.map((_, index) => {
                  const isCompleted = index < currentQuestion;
                  const isCurrent = index === currentQuestion;
                  const isAnsweredQ =
                    answers[questions[index].id] !== undefined;

                  return (
                    <motion.div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        isCompleted
                          ? "bg-green-500 w-8"
                          : isCurrent
                            ? "bg-blue-500 w-12"
                            : isAnsweredQ
                              ? "bg-blue-300 w-2"
                              : "bg-gray-200 w-2"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  );
                })}
              </div>

              <Button
                onClick={handleNext}
                disabled={!isAnswered()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {currentQuestion === questions.length - 1 ? (
                  <>
                    Complete
                    <CheckCircle className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Hints */}
            {!isAnswered() && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="flex gap-3">
                  <Zap className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <strong>Tip:</strong>{" "}
                    {question.help ||
                      "Answer this question to proceed to the next step."}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
