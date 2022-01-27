import React, { Component } from 'react'
import Modal from 'react-modal'

import ImageGallery from 'react-image-gallery'


const customStyles = {
  content: {
    position: 'absolute',
    top: '10%',
    // left: '50%',
    // right: 'auto',
    bottom: '10%',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    background: 'black',
  }
}

export default class Portfolio extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal () {
    // this.subtitle.style.color = '#f00'
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {

      if(this.props.data) {
        var output = this.props.data.projects.map((eachdata) => {
          var images = []
          return (
            <div className="columns portfolio-item">
              <div className="item-wrap" onClick={this.openModal}>
                <a title={eachdata.title}>
                  <img alt="" src={eachdata.thumbnail}/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{eachdata.title}</h5>
                      <p>{eachdata.short_description}</p>
                    </div>
                  </div>
                </a>
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel={eachdata.title}
                style={customStyles}
              >
                <div style={{outline: 'solid', margin: '0px 0px', background: 'white', height: '90%',
                overflow: 'scroll'
                }}>
                  <div style={{marginLeft: '25%', marginRight: '25%', marginTop: '5%', width: '50%'}}>
                    <br/>
                    {
                      eachdata.photos.map((eachlink)=>{
                        images.push({
                          original : eachlink,
                          thubnail : eachlink
                        })
                    })
                    }
                    <ImageGallery items={images} showBullets={true} autoPlay={true}
                    />
                  </div>
                  <div>
                    <div>
                      <div style={{margin: '10px 10px'}}>
                        <button onClick={this.closeModal} type="button" className="btn btn-danger">Exit</button>
                        <h3>{eachdata.title}</h3>
                        <div style={{ margin: "10px 10px"}}>
                          {
                            eachdata.description.map((each) => {
                              return (
                                <p>{each}</p>
                              )
                            })
                          }
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          )

        })
      }
    return (
      <div className={'App'}>
        <div className={'App-header'}>
          <section id={'portfolio'}>
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>MY PROJECTS/PORTFOLIO</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {output}

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}