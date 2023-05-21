import React from 'react'
import Edit from '/edit.png'
import Delete from '/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <div className="info">
            <span>Antony</span>
            <p>Posted 2 day ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ex iusto officia libero vel perspiciatis, sed qui quod expedita amet explicabo commodi dicta, natus impedit similique quas. Autem, reprehenderit ut? <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis maiores sunt reprehenderit totam, adipisci quibusdam tenetur provident deserunt similique, praesentium cumque consequatur laudantium tempore cupiditate modi veniam nemo quia! <br /><br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam enim perspiciatis alias numquam accusantium minus, ipsam fugiat quasi. Sed ducimus molestias, tenetur reprehenderit consectetur rerum debitis? Incidunt eos nemo odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel nihil eaque sapiente officiis expedita dignissimos quis tempora est? Quia totam laudantium, dignissimos necessitatibus vel praesentium enim autem deserunt tempora!</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single