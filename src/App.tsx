import { useMemo, useState, type ReactNode } from 'react'
import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import PsychologyIcon from '@mui/icons-material/Psychology'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AirIcon from '@mui/icons-material/Air'
import OpacityIcon from '@mui/icons-material/Opacity'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

type BodySystem = {
  id: string
  title: string
  subtitle: string
  icon: ReactNode
  wikiUrl: string
}

type Organ = {
  id: string
  title: string
  blurb: string
  details: string
  icon: ReactNode
  tags: string[]
}

type QuizQuestion = {
  question: string
  options: string[]
  answerIndex: number
  explanation: string
}

function HeroDiagram() {
  // A cleaner, more “anatomy diagram” style (line-art skeleton silhouette)
  return (
    <svg className="hero-diagram" viewBox="0 0 520 760" role="img" aria-label="Human skeleton diagram">
      <defs>
        <linearGradient id="boneGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#e5e7eb" stopOpacity="0.95" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      <g filter="url(#shadow)" stroke="#0f172a" strokeOpacity="0.35" strokeWidth="6" fill="url(#boneGlow)">
        {/* Skull */}
        <path d="M260 80c-46 0-78 30-78 74c0 30 14 52 34 63v26c0 18 15 32 33 32h22c18 0 33-14 33-32v-26c20-11 34-33 34-63c0-44-32-74-78-74z" />

        {/* Spine */}
        <path d="M260 260c-16 0-28 12-28 28v190c0 16 12 28 28 28s28-12 28-28V288c0-16-12-28-28-28z" />

        {/* Ribcage */}
        <path d="M190 320c0-58 48-106 106-106s106 48 106 106c0 60-46 112-106 112s-106-52-106-112z" fill="#f8fafc" />
        <path d="M214 308c18-38 56-62 96-62s78 24 96 62" fill="none" />
        <path d="M206 340c22-34 58-52 104-52s82 18 104 52" fill="none" />
        <path d="M206 374c26-26 62-38 104-38s78 12 104 38" fill="none" />
        <path d="M214 410c26-18 56-26 96-26s70 8 96 26" fill="none" />

        {/* Pelvis */}
        <path d="M188 520c16-46 56-74 72-80c18-8 28-10 40-10s22 2 40 10c16 6 56 34 72 80c-28 30-60 46-112 46s-84-16-112-46z" />

        {/* Arms */}
        <path d="M140 300c-26 10-42 40-30 70l58 148c10 24 36 36 60 26c24-10 36-38 26-62l-50-126" fill="#f8fafc" />
        <path d="M380 300c26 10 42 40 30 70l-58 148c-10 24-36 36-60 26c-24-10-36-38-26-62l50-126" fill="#f8fafc" />

        {/* Legs */}
        <path d="M232 568l-44 170c-8 28 10 56 38 62c28 8 56-10 62-38l44-170" fill="#f8fafc" />
        <path d="M288 568l44 170c8 28-10 56-38 62c-28 8-56-10-62-38l-44-170" fill="#f8fafc" />
      </g>

      {/* Accent label dots (subtle “science diagram” feel) */}
      <g fill="#dc3545" fillOpacity="0.22">
        <circle cx="140" cy="240" r="10" />
        <circle cx="410" cy="350" r="10" />
        <circle cx="110" cy="520" r="10" />
        <circle cx="420" cy="610" r="10" />
      </g>
    </svg>
  )
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function App() {
  const systems: BodySystem[] = useMemo(
    () => [
      {
        id: 'skeletal',
        title: 'Skeletal System',
        subtitle: 'Support, protection, movement',
        icon: <AccessibilityNewIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Skeletal_system',
      },
      {
        id: 'muscular',
        title: 'Muscular System',
        subtitle: 'Strength, posture, motion',
        icon: <FitnessCenterIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Muscular_system',
      },
      {
        id: 'nervous',
        title: 'Nervous System',
        subtitle: 'Signals & control',
        icon: <PsychologyIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Nervous_system',
      },
      {
        id: 'circulatory',
        title: 'Circulatory System',
        subtitle: 'Blood, oxygen, nutrients',
        icon: <FavoriteBorderIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Circulatory_system',
      },
      {
        id: 'respiratory',
        title: 'Respiratory System',
        subtitle: 'Breathing & gas exchange',
        icon: <AirIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Respiratory_system',
      },
      {
        id: 'digestive',
        title: 'Digestive System',
        subtitle: 'Energy from food',
        icon: <OpacityIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Digestive_system',
      },
      {
        id: 'sensory',
        title: 'Sensory Systems',
        subtitle: 'See, hear, feel',
        icon: <VisibilityIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Sense',
      },
      {
        id: 'immune',
        title: 'Immune System',
        subtitle: 'Defense & healing',
        icon: <LocalHospitalIcon />,
        wikiUrl: 'https://en.wikipedia.org/wiki/Immune_system',
      },
    ],
    [],
  )

  const organs: Organ[] = useMemo(
    () => [
      {
        id: 'heart',
        title: 'Heart',
        blurb: 'Pumps blood to deliver oxygen and nutrients throughout the body.',
        details:
          'The heart is a muscular organ that maintains circulation. It pushes oxygen-rich blood to tissues and returns oxygen-poor blood to the lungs.',
        icon: <FavoriteIcon />,
        tags: ['Circulation', 'Oxygen', 'Pulse'],
      },
      {
        id: 'brain',
        title: 'Brain',
        blurb: 'Controls thoughts, memory, movement, and vital body functions.',
        details:
          'The brain is the command center of the nervous system. It processes sensory information, coordinates movement, and supports learning and emotions.',
        icon: <PsychologyIcon />,
        tags: ['Neurons', 'Memory', 'Control'],
      },
      {
        id: 'lungs',
        title: 'Lungs',
        blurb: 'Exchange oxygen and carbon dioxide to power cellular respiration.',
        details:
          'The lungs bring oxygen into the bloodstream and remove carbon dioxide. Tiny air sacs (alveoli) provide a large surface for gas exchange.',
        icon: <AirIcon />,
        tags: ['Breathing', 'Alveoli', 'Gas exchange'],
      },
      {
        id: 'digestive',
        title: 'Digestive System',
        blurb: 'Breaks down food, absorbs nutrients, and removes waste.',
        details:
          'Digestion turns food into molecules your body can use. The stomach and intestines help break down food, absorb nutrients, and eliminate waste.',
        icon: <OpacityIcon />,
        tags: ['Nutrients', 'Absorption', 'Metabolism'],
      },
    ],
    [],
  )

  const articles = useMemo(
    () => [
      {
        title: 'Understanding the Nervous System',
        desc: 'From neurons to reflexes—how your body sends and receives signals.',
        url: 'https://en.wikipedia.org/wiki/Nervous_system',
      },
      {
        title: 'Digestive Process Explained',
        desc: 'A step-by-step tour of how food becomes energy.',
        url: 'https://en.wikipedia.org/wiki/Digestion',
      },
      {
        title: 'Circulation 101',
        desc: 'How the heart and vessels deliver oxygen and nutrients.',
        url: 'https://en.wikipedia.org/wiki/Circulatory_system',
      },
      {
        title: 'Breathing & Gas Exchange',
        desc: 'What happens in the lungs when you inhale and exhale.',
        url: 'https://en.wikipedia.org/wiki/Respiratory_system',
      },
    ],
    [],
  )

  const testimonials = useMemo(
    () => [
      {
        name: 'Dr. Rina Sharma',
        role: 'Physiologist',
        quote: 'Very informative and engaging! I learned so much about the human body!',
      },
      {
        name: 'Aarav Mehta',
        role: 'Medical Student',
        quote: 'The 3D explorer makes it easier to visualize systems and organs.',
      },
      {
        name: 'Sophia Chen',
        role: 'Science Teacher',
        quote: 'Perfect for classroom demos—clean design, great flow, and fun quiz.',
      },
    ],
    [],
  )

  const quiz: QuizQuestion[] = useMemo(
    () => [
      {
        question: 'Which organ primarily pumps blood through the body?',
        options: ['Lungs', 'Heart', 'Liver', 'Kidneys'],
        answerIndex: 1,
        explanation: 'The heart is a muscular pump that drives circulation.',
      },
      {
        question: 'Where does most gas exchange happen in the lungs?',
        options: ['Bronchi', 'Trachea', 'Alveoli', 'Diaphragm'],
        answerIndex: 2,
        explanation: 'Alveoli are tiny air sacs designed for oxygen/CO₂ exchange.',
      },
      {
        question: 'Which system coordinates electrical signals across the body?',
        options: ['Digestive', 'Nervous', 'Skeletal', 'Immune'],
        answerIndex: 1,
        explanation: 'The nervous system communicates using electrical and chemical signals.',
      },
      {
        question: 'Bones are most closely associated with which body system?',
        options: ['Skeletal', 'Respiratory', 'Circulatory', 'Endocrine'],
        answerIndex: 0,
        explanation: 'Bones form the structure of the skeletal system.',
      },
    ],
    [],
  )

  const [organOpen, setOrganOpen] = useState(false)
  const [selectedOrganId, setSelectedOrganId] = useState<string | null>(null)

  const selectedOrgan = organs.find((o) => o.id === selectedOrganId) ?? null

  const [quizStarted, setQuizStarted] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [pickedIndex, setPickedIndex] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQuestion = quiz[quizIndex]
  const isCorrect = pickedIndex === currentQuestion?.answerIndex

  function resetQuiz() {
    setQuizStarted(false)
    setQuizIndex(0)
    setPickedIndex(null)
    setShowFeedback(false)
  }

  function startQuiz() {
    setQuizStarted(true)
    setQuizIndex(0)
    setPickedIndex(null)
    setShowFeedback(false)
    scrollToId('quiz')
  }

  function submitAnswer() {
    if (pickedIndex === null) return
    setShowFeedback(true)
  }

  function nextQuestion() {
    const next = quizIndex + 1
    if (next >= quiz.length) {
      setQuizStarted(false)
      setQuizIndex(0)
      setPickedIndex(null)
      setShowFeedback(false)
      return
    }
    setQuizIndex(next)
    setPickedIndex(null)
    setShowFeedback(false)
  }

  return (
    <div id="home">
      {/* Sticky Navbar (Bootstrap) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Anatomy Insight
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMain"
            aria-controls="navMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#systems" role="button" data-bs-toggle="dropdown">
                  Body Systems
                </a>
                <ul className="dropdown-menu">
                  {systems.slice(0, 6).map((s) => (
                    <li key={s.id}>
                      <a className="dropdown-item" href={`#system-${s.id}`}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#organs">
                  Organs &amp; Functions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quiz">
                  Anatomy Quiz
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#articles">
                  Latest Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <Typography variant="h1" className="hero-title">
                Explore the Human Anatomy
              </Typography>
              <Typography className="hero-tagline" component="p">
                Discover the Wonders of the Human Body
              </Typography>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <Button variant="contained" color="error" size="large" onClick={() => scrollToId('systems')}>
                  Get Started
                </Button>
              </div>

              <div className="mt-4 d-flex flex-wrap gap-2">
                <Chip color="primary" variant="outlined" label="Body Systems" />
                <Chip color="primary" variant="outlined" label="Organs & Functions" />
                <Chip color="primary" variant="outlined" label="Quiz & Articles" />
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
  <img src="/skeleton.jpg" alt="Human Skeleton" />
</div>

          </div>
        </div>
      </header>

      {/* Body Systems */}
      <section id="systems" className="section">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
            <div>
              <h2 className="section-title">Body Systems</h2>
              <p className="section-subtitle">Explore the major systems that keep you alive and thriving.</p>
            </div>
            <Button variant="contained" color="error" onClick={() => scrollToId('organs')}>
              Jump to Organs
            </Button>
          </div>

          <div className="systems-row">
            {systems.map((s) => (
              <div key={s.id} id={`system-${s.id}`} className="system-card card hover-lift">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-pill">{s.icon}</div>
                    <div>
                      <h3 className="h5 mb-1">{s.title}</h3>
                      <div className="text-secondary small">{s.subtitle}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="contained"
                      color="error"
                      component="a"
                      href={s.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organs */}
      <section id="organs" className="section">
        <div className="container">
          <h2 className="section-title">Organs &amp; Functions</h2>
          <p className="section-subtitle">Key organs and what they do—tap to learn more.</p>

          <div className="row g-4">
            {organs.map((o) => (
              <div key={o.id} className="col-12 col-md-6 col-lg-3">
                <div className="card hover-lift h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="icon-pill icon-pill--pink">{o.icon}</div>
                      <div className="small text-secondary">{o.tags[0]}</div>
                    </div>
                    <h3 className="h5 mt-3">{o.title}</h3>
                    <p className="text-secondary flex-grow-1">{o.blurb}</p>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        setSelectedOrganId(o.id)
                        setOrganOpen(true)
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="section section-alt">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-5">
              <h2 className="section-title">Anatomy Quiz</h2>
              <p className="section-subtitle">Test Your Knowledge!</p>
              <Button variant="contained" color="error" size="large" onClick={startQuiz}>
                Start Quiz
              </Button>
              <div className="mt-3 text-secondary small">
                Questions appear one-by-one, with instant feedback after you submit an answer.
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  {!quizStarted ? (
                    <div>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Ready when you are.
                      </Typography>
                      <div className="text-secondary mt-1">
                        Hit “Start Quiz” to begin. You’ll get feedback after each question.
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Question {quizIndex + 1} of {quiz.length}
                        </Typography>
                        <Button variant="text" color="primary" onClick={resetQuiz}>
                          Reset
                        </Button>
                      </div>

                      <Typography sx={{ mt: 2, fontWeight: 700 }}>{currentQuestion.question}</Typography>

                      <div className="mt-3 d-grid gap-2">
                        {currentQuestion.options.map((opt, idx) => (
                          <button
                            key={opt}
                            type="button"
                            className={`quiz-option ${pickedIndex === idx ? 'quiz-option--picked' : ''}`}
                            onClick={() => setPickedIndex(idx)}
                            disabled={showFeedback}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      <div className="d-flex gap-2 flex-wrap mt-3">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={submitAnswer}
                          disabled={pickedIndex === null || showFeedback}
                        >
                          Submit Answer
                        </Button>
                        <Button variant="outlined" color="primary" onClick={nextQuestion} disabled={!showFeedback}>
                          Next
                        </Button>
                      </div>

                      {showFeedback && (
                        <div className={`quiz-feedback mt-3 ${isCorrect ? 'ok' : 'no'}`}>
                          <div className="fw-bold">{isCorrect ? 'Correct!' : 'Not quite.'}</div>
                          <div className="small">{currentQuestion.explanation}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Fresh reads to deepen your understanding.</p>

          <div className="row g-4">
            {articles.map((a) => (
              <div key={a.title} className="col-12 col-md-6 col-lg-3">
                <div className="card hover-lift h-100">
                  <div className="card-body d-flex flex-column">
                    <h3 className="h6 fw-bold">{a.title}</h3>
                    <p className="text-secondary flex-grow-1">{a.desc}</p>
                    <Button
                      variant="contained"
                      color="error"
                      component="a"
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What learners and experts are saying.</p>

          <div className="row g-4">
            {testimonials.map((t) => (
              <div key={t.name} className="col-12 col-md-6 col-lg-4">
                <div className="card hover-lift h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <Avatar sx={{ bgcolor: 'primary.main' }}>{t.name.split(' ').slice(0, 2).map((x) => x[0])}</Avatar>
                        <div>
                          <div className="fw-bold">{t.name}</div>
                          <div className="small text-secondary">{t.role}</div>
                        </div>
                      </div>
                      <FavoriteIcon color="error" />
                    </div>

                    <div className="mt-3 text-secondary">“{t.quote}”</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <h2 className="section-title">About Us</h2>
              <p className="section-subtitle">Learning anatomy should be visual, interactive, and fun.</p>
              <p className="text-secondary">
                Anatomy Insight is a modern, responsive single-page experience designed to help learners explore body
                systems, understand organ functions, practice with quizzes, and interact with 3D visuals.
              </p>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="React" color="primary" variant="outlined" />
                <Chip label="Bootstrap Layout" color="primary" variant="outlined" />
                <Chip label="Material UI" color="primary" variant="outlined" />
              </Stack>
            </div>
            <div className="col-12 col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Quick Actions
                  </Typography>
                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <Button variant="contained" color="error" onClick={() => scrollToId('systems')}>
                      Body Systems
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => scrollToId('quiz')}>
                      Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="small text-secondary">© {new Date().getFullYear()} Anatomy Insight</div>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <a className="footer-link" href="#privacy">
                Privacy Policy
              </a>
              <a className="footer-link" href="#terms">
                Terms of Service
              </a>
              <div className="d-flex gap-1">
                <IconButton aria-label="Facebook" size="small" color="primary">
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Twitter" size="small" color="primary">
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Instagram" size="small" color="primary">
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Organ modal */}
      <Dialog open={organOpen} onClose={() => setOrganOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle sx={{ pr: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box className="icon-pill icon-pill--pink">{selectedOrgan?.icon}</Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                {selectedOrgan?.title ?? 'Organ'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedOrgan?.tags.join(' • ') ?? ''}
              </Typography>
            </Box>
          </Box>
          <IconButton
            aria-label="Close"
            onClick={() => setOrganOpen(false)}
            sx={{ position: 'absolute', right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography color="text.secondary">{selectedOrgan?.details}</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {selectedOrgan?.tags.map((t) => (
              <Chip key={t} label={t} color="primary" variant="outlined" size="small" />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  )
}

