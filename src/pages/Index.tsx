
import { Upload, FileText, Download, Edit, Scissors, Merge, Archive, FileImage, Shield, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const pdfTools = [
    {
      id: "merge",
      title: "Merge PDF",
      description: "Combine PDFs in the order you want with the easiest PDF merger available",
      icon: Merge,
      color: "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    },
    {
      id: "split",
      title: "Split PDF",
      description: "Separate one page or a whole set for easy conversion into independent PDF files",
      icon: Scissors,
      color: "bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    },
    {
      id: "compress",
      title: "Compress PDF",
      description: "Reduce file size while optimizing for maximal PDF quality",
      icon: Archive,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700",
    },
    {
      id: "pdf-to-word",
      title: "PDF to Word",
      description: "Easily convert your PDF files into editable Word documents",
      icon: FileText,
      color: "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    },
    {
      id: "word-to-pdf",
      title: "Word to PDF",
      description: "Make DOC and DOCX files easy to read by converting them to PDF",
      icon: FileText,
      color: "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    },
    {
      id: "edit-pdf",
      title: "Edit PDF",
      description: "Add text, images, shapes or freehand annotations to a PDF document",
      icon: Edit,
      color: "bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    },
    {
      id: "pdf-to-excel",
      title: "PDF to Excel",
      description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds",
      icon: Download,
      color: "bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
    },
    {
      id: "pdf-to-jpg",
      title: "PDF to JPG",
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF",
      icon: FileImage,
      color: "bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PDFTools Pro</h1>
                <p className="text-xs text-gray-600">Professional PDF Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Tools</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Features</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Pricing</a>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              Trusted by 10M+ users worldwide
            </span>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Every tool you need to work with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              PDFs in one place
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional PDF tools that are 100% free and easy to use. 
            Merge, split, compress, convert, rotate, unlock and watermark PDFs with enterprise-grade security.
          </p>
          
          {/* Quick Upload Area */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-20 border border-gray-100 hover:shadow-2xl transition-all duration-300 max-w-2xl mx-auto">
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:border-red-300 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Select PDF file</h3>
              <p className="text-gray-600 mb-8 text-lg">Drop your PDF here or click to browse from your device</p>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Select PDF file
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Choose your PDF tool
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade PDF tools designed for efficiency and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pdfTools.map((tool) => (
              <Card key={tool.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-3xl ${tool.color} flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                      <tool.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {tool.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {tool.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose PDFTools Pro?
            </h3>
            <p className="text-xl text-gray-600">
              Industry-leading features that professionals trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">100% Free</h4>
              <p className="text-gray-600 text-lg leading-relaxed">All professional tools are completely free to use with no hidden charges or limitations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Enterprise-grade security with automatic file deletion and encrypted processing</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h4>
              <p className="text-gray-600 text-lg leading-relaxed">High-performance processing with results delivered in seconds, not minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to transform your PDF workflow?
          </h3>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Join millions of professionals who trust PDFTools Pro for their document needs
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">PDFTools Pro</h4>
                  <p className="text-xs text-gray-400">Professional PDF Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The complete PDF solution trusted by professionals worldwide for secure, fast, and reliable document processing.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Tools</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Merge PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Split PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compress PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Convert PDF</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PDFTools Pro. All rights reserved. Built with precision and care.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Globe className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Available worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
