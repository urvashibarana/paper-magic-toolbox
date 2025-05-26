
import { Upload, FileText, Download, Edit, Scissors, Merge, Archive, FileImage, Shield, Zap, Globe, Menu, ChevronDown, Image, Video, Music, Code, Calculator, Palette, Database, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const toolCategories = [
    {
      title: "PDF Tools",
      tools: [
        {
          id: "merge-pdf",
          title: "Merge PDF",
          description: "Combine multiple PDF files into one",
          icon: Merge,
          color: "bg-red-500",
        },
        {
          id: "split-pdf",
          title: "Split PDF",
          description: "Split PDF into multiple files",
          icon: Scissors,
          color: "bg-orange-500",
        },
        {
          id: "compress-pdf",
          title: "Compress PDF",
          description: "Reduce PDF file size",
          icon: Archive,
          color: "bg-yellow-500",
        },
        {
          id: "pdf-to-word",
          title: "PDF to Word",
          description: "Convert PDF to Word document",
          icon: FileText,
          color: "bg-blue-500",
        },
      ]
    },
    {
      title: "Image Tools",
      tools: [
        {
          id: "resize-image",
          title: "Resize Image",
          description: "Change image dimensions",
          icon: Image,
          color: "bg-purple-500",
        },
        {
          id: "compress-image",
          title: "Compress Image",
          description: "Reduce image file size",
          icon: Archive,
          color: "bg-pink-500",
        },
        {
          id: "convert-image",
          title: "Convert Image",
          description: "Change image format",
          icon: FileImage,
          color: "bg-green-500",
        },
        {
          id: "crop-image",
          title: "Crop Image",
          description: "Cut out parts of image",
          icon: Scissors,
          color: "bg-teal-500",
        },
      ]
    },
    {
      title: "Video Tools",
      tools: [
        {
          id: "compress-video",
          title: "Compress Video",
          description: "Reduce video file size",
          icon: Video,
          color: "bg-indigo-500",
        },
        {
          id: "convert-video",
          title: "Convert Video",
          description: "Change video format",
          icon: Video,
          color: "bg-cyan-500",
        },
        {
          id: "extract-audio",
          title: "Extract Audio",
          description: "Get audio from video",
          icon: Music,
          color: "bg-violet-500",
        },
        {
          id: "trim-video",
          title: "Trim Video",
          description: "Cut video to specific length",
          icon: Scissors,
          color: "bg-rose-500",
        },
      ]
    },
    {
      title: "Other Tools",
      tools: [
        {
          id: "password-generator",
          title: "Password Generator",
          description: "Generate secure passwords",
          icon: Lock,
          color: "bg-gray-600",
        },
        {
          id: "color-picker",
          title: "Color Picker",
          description: "Pick and convert colors",
          icon: Palette,
          color: "bg-amber-500",
        },
        {
          id: "calculator",
          title: "Calculator",
          description: "Perform calculations",
          icon: Calculator,
          color: "bg-emerald-500",
        },
        {
          id: "url-shortener",
          title: "URL Shortener",
          description: "Shorten long URLs",
          icon: Globe,
          color: "bg-sky-500",
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TinyTools</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">All Tools</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">PDF Tools</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Image Tools</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Video Tools</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">More</a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Premium
              </Button>
              
              {/* Mobile menu button */}
              <DropdownMenu>
                <DropdownMenuTrigger className="lg:hidden p-2 text-gray-700 hover:text-blue-600">
                  <Menu className="w-6 h-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white shadow-lg border lg:hidden">
                  <DropdownMenuItem className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    All Tools
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    PDF Tools
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    Image Tools
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    Video Tools
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    Sign In
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Free Online Tools for Everyone
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simple, fast, and secure online tools to help you work more efficiently. 
            No downloads required, works in your browser.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for tools..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">50+</span> Tools
            </div>
            <div>
              <span className="font-semibold text-gray-900">100%</span> Free
            </div>
            <div>
              <span className="font-semibold text-gray-900">No</span> Registration
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <div key={category.title} className={`mb-16 ${categoryIndex > 0 ? 'mt-20' : ''}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool) => (
                  <Card key={tool.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TinyTools?
            </h3>
            <p className="text-xl text-gray-600">
              Trusted by millions of users worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-gray-600">Process files quickly with our optimized tools</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h4>
              <p className="text-gray-600">Your files are processed securely and deleted automatically</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Works Everywhere</h4>
              <p className="text-gray-600">Use our tools on any device with a web browser</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Start Using Our Tools Today
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            No registration required. All tools are completely free to use.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Browse All Tools
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">TinyTools</span>
              </div>
              <p className="text-gray-400 text-sm">
                Free online tools for everyone. Simple, fast, and secure.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Tools</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">PDF Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Image Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">All Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TinyTools. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
