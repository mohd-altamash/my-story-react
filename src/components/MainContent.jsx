import PageContent from "./PageContent";
import Sidebar from "./Sidebar"


export default function MainContent() {
  return (
    <main role="main" className="container">
      <div className="row">
        <PageContent />
        <Sidebar />
      </div>
    </main>
  )
}