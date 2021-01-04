import React from "react";
import "../CSS Styles/Announcement.css";
import offer from '../CSS Styles/offer.png';
import offer2 from '../CSS Styles/offer2.png';
import sale from '../CSS Styles/sale.png';
import hot_deal from '../CSS Styles/hot_deal.png';
import rank from '../CSS Styles/rank.png';
import canada from '../CSS Styles/canada.png';
import axios from 'axios';
import Loader from "./loader";
class Announcement extends React.Component {
  
  renderHeader() {
    return(
  
      <div className="ancmt-img">
         {/* text */}
         <div id="containerr">
              <h1 id="ancmt_head">Announcemenrtss & News</h1>
            </div>
           {/* text ends */}
      </div>

    )
  }

  
  renderOurOffers() {
    return (
      <div className="ui internally celled grid" >
        <div className="ten wide column">
          <h1 id="text_2">Our Announcements & Offers</h1>
          <hr id="hr"/>
          <div className="block0">
            <h2> 
              <img src={offer} alt="offer"/>
              The Binary Driving School Now Offering Student Discount !
            </h2>
            <img id="hot_deal" src={hot_deal} alt="hot_deal"/>
            <h3>It’s almost {new Date().getFullYear()+1}! Before {new Date().getFullYear()} comes to an end, we 
            rounded up some of the frequently asked questions by our international students <br/> regarding driving 
            and working in Canada. If you currently hold a study permit, we want to share these important reminders 
            on a number <br/> of key immigration issues and invite you to do a self-check at this time if you want to 
            get the student discounts.</h3>
            
            <b>
               What do we offer students?
            </b>
            <h3 id="ques_ans_1" >
              The Binary Driving School has introduced a new breakthrough to give students the oppurtunity to spend 
              less and at the same time get valuable <br/> lessons from our certified trainers to ace their driving 
              test. We will give international and local students the same discount because we believe <br/> 
              every student should be give equal preference. 
            </h3>
            
            <b>
               What do I have to do if I change my driving schools or programs?
            </b>
            <h3 id="ques_ans_2">
            You must update your record at SNB each time you change any of training schools. Changing the training 
            school in your SNB account is free and <br/> can be done at SNB's nearest location. You don’t need to 
            apply for a new study permit if you are changing schools. 
            </h3>
          </div>

          <div className="block0">
            <h2> 
              <img src={sale} alt="sale-on"/>
              The BDS Now Providing Hybrid Cars At A Low Price!
            </h2>
            <img id="hot_deal" src={offer2} alt="offer_availabe"/>
            <h3>
              The Binary Driving School has teamed up with a new start-up to give back to our environment. 
              If you decide to use a hybrid car during your <br/> trainig, then BDS will provide a discount of 50%. 
              Quite simply, a hybrid combines at least one electric motor with a gasoline engine to move <br/> the car, 
              and its system recaptures energy via regenerative braking. Sometimes the electric motor does all the work, 
              sometimes it's the gas <br/> engine, and sometimes they work together. The result is less gasoline burned 
              and, therefore, better fuel economy.
            </h3>
          </div>

          <div className="block0">
            <h2> 
              <img src={rank} alt="ranked#1" id="rank1"/>
              The BDS Ranked No.1 In The Atlantic Province!
            </h2>
            <img id="canada" src={canada} alt="canada"/>
            <h3>
              The Binary Driving School is proud to announce that BDS has been ranked on the first position. 
              We all at the binary driving school, thank <br/> each of you who have helped us to reach at this position. 
              We will soon be introducing new packages at a very cheap cost on our anniversary. <br/> Please stay in
              touch with us as we will soon be announcing new news. We all thank you once again!
            </h3>
          </div>

         <h1 id="general">General News</h1>
          <p id="news-api">
           Source - <a href="https://gnews.io/"> gnews.io</a>
       </p>
          <hr id="hr"/>

        </div>
 
      </div>
      
  )
}

  state = {articles: [],isLoading: true};
  
  async getArticles() {
   await axios.get("https://gnews.io/api/v4/top-headlines?token=56c165908a5d272d33c95d6c1293b1d8", {
      params: {lang: 'en' , q: 'drive'  }
    })
    .then(response => {
      return response.data.articles.map(article => ({
        title: `${article.title}`,
        description: `${article.description}`,
        date: `${article.publishedAt}`,
       
        url: `${article.url}`,
        urlToImage: `${article.image}`,
        
        author:`${article.source.name}`
        

      }));
    })
    .then( articles => { 
      this.setState({articles,isLoading: false} );
    }).catch(error => this.setState({ error, isLoading: false }));
    
  }

  componentDidMount() {
    this.getArticles();
  }

  renderNews() {
    const { isLoading, articles } = this.state;
    return(
      <div >
      {!isLoading ? (
        articles.map(article => {
          const { date, title, url,urlToImage,description, author } = article;
          return ( 
            <div className="block01" key={url}>
              
              <div className="ui container" id="cont1">
                <div id="title">
                  <h2 className="article_title">
                    {title} 
                  </h2>
                </div>
              </div>

              <div className="ui container" id="cont2">
                <div className="article_authors">
                  {author}
                </div>
              </div>

              <div className="ui container" id="cont3">
                <div className="article_date">
                  <time>{date}</time>
                </div>
              </div>

              <div className="ui container" id="cont4">
                <div className="article_content">
                <p>{description}</p>
                </div>
              </div>

              <div className="ui container" id="cont5">
                <div className="article_image">
                    <img src={urlToImage} alt={urlToImage} />
                </div>
              </div>
              <div id="container">
                <button className="learn-more" id="button_read_more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <a href={url} className="button-text" target="_blank" rel="noopener noreferrer" >Read More</a>
                </button>
            </div>
         </div>
          );
        })
      ) : (
        <Loader message="Loading News From GNews. Please Wait."/>
      )}

    </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.renderHeader()}
          {this.renderOurOffers()}
          {this.renderNews()}
        </div>
      </React.Fragment>
    );
  }
  
};


export default Announcement;
