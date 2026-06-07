export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-blue-950 dark:to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Quiz Master</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
            <a href="#benefits" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Benefits</a>
            <a href="#getting-started" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Master Assessments with <span className="text-blue-600 dark:text-blue-400">Quiz Master</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              An intelligent platform designed for educators and learners to create, manage, and take interactive quizzes with real-time feedback and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Creating Quizzes
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 text-white flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-lg font-semibold">Interactive Learning Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Easy Quiz Creation</h3>
            <p className="text-gray-600 dark:text-gray-400">Intuitive interface to create quizzes with multiple question types including MCQ, short answer, and essay questions.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-Time Feedback</h3>
            <p className="text-gray-600 dark:text-gray-400">Instant feedback to learners with detailed explanations for each answer to enhance learning outcomes.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analytics & Reports</h3>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive performance analytics to track student progress and identify learning gaps.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Randomized Questions</h3>
            <p className="text-gray-600 dark:text-gray-400">Shuffle questions and answers to reduce cheating and promote fair assessment practices.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Classroom Management</h3>
            <p className="text-gray-600 dark:text-gray-400">Manage multiple classes and students with detailed progress tracking and assignment scheduling.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure & Private</h3>
            <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security with data encryption and privacy controls to protect student information.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-blue-600 dark:bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Quiz Master?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">For Educators</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Save time with automated grading and scoring</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Identify student strengths and weaknesses instantly</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Create question banks for reusability</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Generate comprehensive performance reports</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">For Learners</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Self-paced learning with immediate feedback</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Track personal progress over time</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Prepare for exams with practice quizzes</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Learn from detailed explanations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">10k+</div>
            <p className="text-gray-600 dark:text-gray-400">Active Users</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">50k+</div>
            <p className="text-gray-600 dark:text-gray-400">Quizzes Created</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">100k+</div>
            <p className="text-gray-600 dark:text-gray-400">Attempts Completed</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">99%</div>
            <p className="text-gray-600 dark:text-gray-400">User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="getting-started" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educators and learners transforming education with interactive quizzes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Create Free Account
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quiz Master</h3>
              <p className="text-sm">Transforming education through intelligent assessments.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Quiz Master. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
