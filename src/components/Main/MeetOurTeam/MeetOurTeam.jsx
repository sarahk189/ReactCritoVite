import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import MemberBox from './MemberBox'
import img_kristine from '../../../Assets/images/Kristine Palmer.png'
import img_mark from '../../../Assets/images/Mark Aubri.png'
import img_kimbery from '../../../Assets/images/Kimberly Hansen.png'
import img_justin from '../../../Assets/images/Justin Willoman.png'

const MeetOurTeam = () => {

  const members = [
    {url: "/kristine", img: `${img_kristine}`, alt: "Kristine smiling", name: "Kristine Palmer", position: "Chef Operation Officer"},
    {url: "/mark", img: `${img_mark}`, alt: "Mark smiling", name: "Mark Aubri", position: "Senior Consultant"},
    {url: "/kimberly", img: `${img_kimbery}`, alt: "Kimberly smiling holding magazine", name: "Kimberly Hansen", position: "Senior Consultant"},
    {url: "/justin", img: `${img_justin}`, alt: "Justin smiling", name: "Justin Willoman", position: "Senior Tech Consultant"}
  ]
  return (
    <section className="meet-our-team">

            <div className="container">

                <div className="upper-div-team">

                    <div className="section-title">
                        <SectionTitle title="Meet Our Team" description="Experienced Team Members" />
                    </div>

                    <div>
                        <a className="btn-transparent" href="browse-team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>

                <div className="row">
                {
                    members.map((members, index) => (
                        <MemberBox key={index} url={members.url} img={members.img} alt={members.alt} name={members.name} position={members.position} />
                    ))
                }
                </div>

                <div className="dots">
                    <i className="fa-duotone fa-circle-small"></i>
                    <i className="fa-sharp fa-solid fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                    <div className="last">
                        <i className="fa-duotone fa-circle-small"></i>
                    </div>
                    
                </div>
            </div>

        </section>
  )
}

export default MeetOurTeam