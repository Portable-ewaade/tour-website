import React from 'react'

const TourGbekele = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                <h1 className='fs-xxxlarge'>Meet Our<br/><span className='text-color'>Tour Guides</span></h1>
                </div>
                <div className="col-md-5">
                    <img src="../../../assets/gbekele.png" className='img-fluid rounded-5' alt="..."/>
                </div>
            </div>
        </div>
        <div className='p-3 p-md-5'>
            <h6 className='fs-3 fw-light'><strong>Name:</strong> Oluwatogbekele Obaniyi</h6>
            <h6 className='fs-3 fw-light'><strong>Language:</strong> English, Yoruba</h6>
            <h6 className='fs-3 fw-light'><strong>Location:</strong> Ekiti State, Nigeria</h6>
            <h6 className='fs-3 fw-light'><strong>Years of experience:</strong> 5 years.</h6>
        </div>

        <article className='m-3 p-md-5'>
            <div>
                <h4>About Me:</h4>
                <p>Hello, travelers! I'm Oluwatogbekele, your dedicated tour guide for the enchanting tourist centers of Ekiti State. With five years of experience exploring these hidden gems, I am passionate about sharing the rich cultural heritage, natural beauty, and historical significance of this vibrant state.</p>
            </div>

            <div className='mt-5'>
                <h3>Specialties:</h3>
                <ul>
                    <li><p>Cultural Immersion: Immerse yourself in the diverse culture of Ekiti as we explore traditional festivals, crafts, music, dance, and taste authentic local cuisine.</p></li>
                    <li><p>Nature and Adventure: Discover the breathtaking landscapes of Ekiti, from lush forests and rolling hills to serene waterfalls and tranquil lakes. Get ready for exciting nature walks and hikes.</p></li>
                    <li><p>Historical Insights: Unravel the storied past of Ekiti through visits to ancient palaces, historical monuments, and museums, where tales of the region's history come to life.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h3>Services Offered:</h3>
                <ul>
                    <li><p>Guided Tours: Join me on a group tour where I'll lead you through the enchanting landscapes, sharing interesting stories and historical facts about Ekiti state.</p></li>
                    <li><p>Private Excursions: Tailor your tour to your preferences, interests, and pace. Whether you're a solo traveler, family, or group of friends, I'll create a personalized experience for you.</p></li>
                    <li><p>Educational Trips: For students and academic groups, I offer educational tours that provide valuable insights into Ekiti's culture, nature, and history.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h3>Tour Center Covered</h3>
                <ol>
                    <li><p>Ikogosi Warm Spring: Witness the mesmerizing meeting of warm and cold springs, set amidst picturesque landscapes and a serene valley.</p></li>
                    <li><p>Arinta Waterfalls: Trek through the lush forests to marvel at the cascading beauty of Arinta Waterfalls, an oasis of tranquility.</p></li>
                    <li><p>Ekiti State Pavilion: Discover the art and craft exhibitions, cultural performances, and events that celebrate Ekiti's artistic talents and creativity.</p></li>
                </ol>
            </div>
            <div className='mt-5'>
                <h3>Contact Information</h3>
                <p>Email: gbekeleobaniyi16@gmail.com</p>
                <p>Phone: +2349035619495</p>
            </div>

            <div className='mt-5'>
            <div className="socialmedia">
            <h5>Social Media</h5>
                <a href=" " className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                <a href="https://instagram.com/_totalllyme?igshid=MzNlNGNkZWQ4Mg==" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                <a href=" " className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                <a href=" " className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                <a href="https://wa.me/qr/KK2Q4Y67CWOCP1" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
            </div>
            </div>
        </article>
        
    </div>
  )
}

export default TourGbekele