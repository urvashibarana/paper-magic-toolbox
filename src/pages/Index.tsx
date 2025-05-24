
import { Upload, FileText, Download, Edit, Scissors, Merge, Archive, FileImage, Shield, Zap, Globe, Menu, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const pdfTools = [
    {
      id: "merge",
      title: "Merge PDF",
      description: "Combine PDFs in the order you want with the easiest PDF merger available",
      icon: Merge,
      color: "bg-red-500",
    },
    {
      id: "split",
      title: "Split PDF", 
      description: "Separate one page or a whole set for easy conversion into independent PDF files",
      icon: Scissors,
      color: "bg-red-500",
    },
    {
      id: "compress",
      title: "Compress PDF",
      description: "Reduce file size while optimizing for maximal PDF quality",
      icon: Archive,
      color: "bg-red-500",
    },
    {
      id: "pdf-to-word",
      title: "PDF to Word",
      description: "Easily convert your PDF files into easy to edit DOC and DOCX documents",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      id: "pdf-to-powerpoint",
      title: "PDF to PowerPoint",
      description: "Turn your PDF files into easy to edit PPT and PPTX slideshows",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      id: "pdf-to-excel",
      title: "PDF to Excel",
      description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds",
      icon: Download,
      color: "bg-green-500",
    },
    {
      id: "word-to-pdf",
      title: "Word to PDF",
      description: "Make DOC and DOCX files easy to read by converting them to PDF",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      id: "powerpoint-to-pdf", 
      title: "PowerPoint to PDF",
      description: "Make PPT and PPTX slideshows easy to view by converting them to PDF",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      id: "excel-to-pdf",
      title: "Excel to PDF",
      description: "Make EXCEL spreadsheets easy to read by converting them to PDF",
      icon: FileText,
      color: "bg-green-500",
    },
    {
      id: "edit-pdf",
      title: "Edit PDF",
      description: "Add text, images, shapes or freehand annotations to a PDF document",
      icon: Edit,
      color: "bg-purple-500",
    },
    {
      id: "pdf-to-jpg",
      title: "PDF to JPG",
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF",
      icon: FileImage,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">I</span>
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">♥</span>
                </div>
                <span className="text-2xl font-bold">PDF</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                <span className="font-medium">MERGE PDF</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                <span className="font-medium">SPLIT PDF</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                <span className="font-medium">COMPRESS PDF</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                <span className="font-medium">CONVERT PDF</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                <span className="font-medium">ALL PDF TOOLS</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-red-600">
                Login
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Sign up
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Every tool you need to work with PDFs in one place
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pdfTools.map((tool) => (
              <Card key={tool.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-lg ${tool.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why choose our PDF tools?
            </h2>
            <p className="text-lg text-gray-600">
              Professional-grade features that you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Free</h3>
              <p className="text-gray-600">All tools are completely free to use with no hidden charges or limitations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">Your files are processed securely and deleted automatically after processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600">Simple drag-and-drop interface that works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">I</span>
                <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">♥</span>
                </div>
                <span className="text-xl font-bold">PDF</span>
              </div>
              <p className="text-gray-400 text-sm">
                The complete PDF solution for all your document needs. Fast, secure, and reliable.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">PDF Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Merge PDF</a></li>
                <li><a href="#" className="hover:text-white">Split PDF</a></li>
                <li><a href="#" className="hover:text-white">Compress PDF</a></li>
                <li><a href="#" className="hover:text-white">Convert PDF</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 iLovePDF. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
