import image1 from "./profile_pics/18f448c6f31c5a9d.jpg"
import image2 from "./profile_pics/b6e1c53325f88b74.png"
import image3 from "./profile_pics/default.jpg"

export default function ContentHomePage() {
  return (
    <>
      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8">
            <article class="media content-section">
              <img class="rounded-circle article-img" src={image1} />
              <div class="media-body">
                <div class="article-metadata">
                  <a class="mr-2" href="/user/Altamash">Altamash</a>
                  <small class="text-muted">2023-07-18</small>
                </div>
                <h2><a class="article-title" href="/post/28">First post by Altamash</a></h2>
                <p class="article-content">Hi, this is Altamash. I&#39;m working as a Software Developer.</p>
              </div>
            </article>

            <article class="media content-section">
              <img class="rounded-circle article-img" src={image2} />
              <div class="media-body">
                <div class="article-metadata">
                  <a class="mr-2" href="/user/CoreyMS">CoreyMS</a>
                  <small class="text-muted">2018-05-02</small>
                </div>
                <h2><a class="article-title" href="/post/27">My Latest Post</a></h2>
                <p class="article-content">Congue salutandi ex eam! Mei an prima consulatu, erat detracto eu quo? Vim ea esse utinam efficiantur, at noster dicunt.</p>
              </div>
            </article>

            <article class="media content-section">
              <img class="rounded-circle article-img" src={image2} />
              <div class="media-body">
                <div class="article-metadata">
                  <a class="mr-2" href="/user/CoreyMS">CoreyMS</a>
                  <small class="text-muted">2018-05-02</small>
                </div>
                <h2><a class="article-title" href="/post/26">Do You Need To Go To College To Be A Programmer?</a></h2>
                <p class="article-content">Erat expetenda definitionem id eos. Semper suscipit eum ut, eum ex nemore copiosae. Nam probatus pertinacia eu! No alii voluptua abhorreant nec, te pro impedit concludaturque, in sea malis torquatos disputationi! Nam te alii nobis ponderum, ei fugit accusamus pro. Congue salutandi ex eam! Mei an prima consulatu, erat detracto eu quo? Vim ea esse utinam efficiantur, at noster dicunt.</p>
              </div>
            </article>

            <article class="media content-section">
              <img class="rounded-circle article-img" src={image3} />
              <div class="media-body">
                <div class="article-metadata">
                  <a class="mr-2" href="/user/TestUser">TestUser</a>
                  <small class="text-muted">2018-05-02</small>
                </div>
                <h2><a class="article-title" href="/post/25">Top 5 YouTube Channels For Learning Programming</a></h2>
                <p class="article-content">Quo inani quando ea, mel an vide adversarium suscipiantur. Et dicunt eleifend splendide pro. Nibh animal dolorem vim ex, nec te agam referrentur. Usu admodum ocurreret ne. Et dico audire cotidieque sed, cibo latine ut has, an case magna alienum.</p>
              </div>
            </article>

            <article class="media content-section">
              <img class="rounded-circle article-img" src={image2} />
              <div class="media-body">
                <div class="article-metadata">
                  <a class="mr-2" href="/user/CoreyMS">CoreyMS</a>
                  <small class="text-muted">2018-05-02</small>
                </div>
                <h2><a class="article-title" href="/post/24">Top 10 Python Tips and Tricks</a></h2>
                <p class="article-content">Pro minim iuvaret ad. No nam ornatus principes euripidis, at sale vituperatoribus eos, eros regione scripserit id mea. Has ne inermis nostrum, quo tantas melius dissentias at! Ut vim tibique omnesque. An mel modo ponderum, eum at probo appetere imperdiet? Natum quaeque intellegebat per ex. Cu viris clita sit? Reque menandri dissentias sed ne, no tota nonumes eos, vix in tempor maiestatis erant.</p>
              </div>
            </article>

            <a class="btn btn-info mb-4" href="/home?page=1">1</a>
            <a class="btn btn-outline-info mb-4" href="/home?page=2">2</a>
            ...
            <a class="btn btn-outline-info mb-4" href="/home?page=6">6</a>
          </div>

          <div class="col-md-4">
            <div class="content-section">
              <h3>Our Sidebar</h3>
              <p class='text-muted'>You can put any information here you'd like.
                <ul class="list-group">
                  <li class="list-group-item list-group-item-light">Latest Posts</li>
                  <li class="list-group-item list-group-item-light">Announcements</li>
                  <li class="list-group-item list-group-item-light">Calendars</li>
                  <li class="list-group-item list-group-item-light">etc</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </>
  )
}