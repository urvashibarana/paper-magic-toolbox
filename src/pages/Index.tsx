
import { Upload, FileText, Download, Edit, Scissors, Merge, Compress, FileImage } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const pdfTools = [
    {
      id: "merge",
      title: "Merge PDF",
      description: "Combine PDFs in the order you want with the easiest PDF merger available",
      icon: Merge,
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      id: "split",
      title: "Split PDF",
      description: "Separate one page or a whole set for easy conversion into independent PDF files",
      icon: Scissors,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: "compress",
      title: "Compress PDF",
      description: "Reduce file size while optimizing for maximal PDF quality",
      icon: Compress,
      color: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      id: "pdf-to-word",
      title: "PDF to Word",
      description: "Easily convert your PDF files into editable Word documents",
      icon: FileText,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "word-to-pdf",
      title: "Word to PDF",
      description: "Make DOC and DOCX files easy to read by converting them to PDF",
      icon: FileText,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "edit-pdf",
      title: "Edit PDF",
      description: "Add text, images, shapes or freehand annotations to a PDF document",
      icon: Edit,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: "pdf-to-excel",
      title: "PDF to Excel",
      description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds",
      icon: Download,
      color: "bg-teal-500 hover:bg-teal-600",
    },
    {
      id: "pdf-to-jpg",
      title: "PDF to JPG",
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF",
      icon: FileImage,
      color: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">iLovePDF Clone</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tools</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Every tool you need to work with PDFs in one place
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! 
            Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
          </p>
          
          {/* Quick Upload Area */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-2 border-dashed border-gray-200 hover:border-red-300 transition-colors">
            <Upload className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Select PDF file</h3>
            <p className="text-gray-600 mb-6">Drop your PDF here or click to browse</p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium">
              Select PDF file
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose your PDF tool
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdfTools.map((tool) => (
              <Card key={tool.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mx-auto mb-4 transition-colors`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {tool.title}
                  </h4>
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
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Why choose our PDF tools?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">100% Free</h4>
              <p className="text-gray-600">All tools are completely free to use with no hidden charges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h4>
              <p className="text-gray-600">Simple drag and drop interface that anyone can use</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast & Secure</h4>
              <p className="text-gray-600">Lightning fast processing with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-xl font-bold">iLovePDF Clone</h4>
          </div>
          <p className="text-gray-400 mb-8">
            The complete PDF solution for all your document needs
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 iLovePDF Clone. Built with React & Vite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
