import './head.css'

function Head (){
    return (
        <>
        
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <img src="images/logo.jpg" alt="logo" className=' head-img'/>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse navbar-items" id="navbarNav">
  <ul className="navbar-nav ms-auto me-3">
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="#">HAKKIMIZDA</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">ÇALIŞMALARIMIZ</a>
    </li>
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            KATIL
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">GİRİŞ YAP</a></li>
            <li><a className="dropdown-item" href="#">ÜYE OL</a></li>
            <li><a className="dropdown-item" href="#">SİPARİŞLERİM</a></li>
            <li><a className="dropdown-item" href="#">SİPARİŞ TAKİBİ</a></li>
            <li><a className="dropdown-item" href="#">SSS</a></li>
          </ul>
        </li>
  </ul>
</div>

  </div>
</nav>
    
        
        
        
        
        
        
        
        </>
    )
}

export default Head