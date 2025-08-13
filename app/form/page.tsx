import Header from "../components/Header"
import Footer from "../components/Footer"

export default function FormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="w-full h-full min-h-[80vh]">
          <iframe
            src="https://form.typeform.com/to/i0fd62td?typeform-embed-id=21703578646569&typeform-embed=embed-widget&typeform-source=thefundeduniversity.com&typeform-medium=snippet&typeform-medium-version=next&embed-opacity=100&typeform-embed-handles-redirect=1&typeform-embed-no-heading=true"
            width="100%"
            height="100%"
            style={{ minHeight: "80vh", border: "none" }}
            title="Funded University Application Form"
            allow="camera; microphone; autoplay; encrypted-media; fullscreen"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
