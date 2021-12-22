const body = document.querySelector('body');
var container=document.createElement('div')
container.id='container'
container.className='container'
body.appendChild(container);
var wrapper=document.createElement('div')
wrapper.id='wrapper'
wrapper.className='wrapper'
body.appendChild(container);
container.appendChild(wrapper);
var logo=document.createElement('div')
logo.id='img'
logo.className='img'
logo.innerHTML=`
<img src="youtubelogo.jpg"class="img">
`

wrapper.appendChild(logo)
var search_body=document.createElement('div')
search_body.id='search_body'
search_body.className='search_body'
search_body.innerHTML=`
<div id="search_bar">
        <input type="text" name="searchtext" id="search_id" class="search" placeholder="Search">
        <span class="btn_container">
            <button type="submit" class="submit_button" onclick="get_data()" >Search</button>
        </span>
</div>
`

wrapper.appendChild(search_body)
var content_wrapper=document.createElement('div')
content_wrapper.id='content_wrapper'
content_wrapper.className='content_wrapper'
wrapper.appendChild(content_wrapper)
var content_body=document.createElement('div')
content_body.id='content_body'
content_body.className='content_body'
content_wrapper.appendChild(content_body)

const page_wrapper = document.createElement('div');
page_wrapper.id = "page-body";
body.appendChild(page_wrapper);

const API_KEY =  "AIzaSyCzJereWAXI3rRAs_6bkxKBq5LYq26HOwY";
const card = function (x, API_KEY) {
  const item = document.createElement("div");
  item.className = "video_item";
  const a = document.createElement("a");
  a.setAttribute("href", `https://www.youtube.com/watch?v=${x.id.videoId}`);

  const h3 = document.createElement("p");
  h3.innerHTML = x.snippet.title;
  a.appendChild(h3);
  const img = document.createElement("img");
  img.className="thumbnail";
  img.setAttribute("src", x.snippet.thumbnails.high.url);

  const des = document.createElement("p");
  des.className="description";
  des.innerHTML =  "<b>Description:</b> "+x.snippet.description;
  const chti = document.createElement("p");
    chti.innerHTML =  "<b>Channel:</b> "+x.snippet.channelTitle;

  const publid = document.createElement("p");
  publid.innerHTML ="<strong>Published Date: </strong>" +
    new Date(x.snippet.publishedAt).toDateString();
  const views = document.createElement("p");
  fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${x.id.videoId}&part=snippet,statistics
        `)
    .then((res) => res.json())
    .then((data) => {
      views.innerHTML = "<b>Views:</b> " + data.items[0].statistics.viewCount;
    });
   


    
  item.appendChild(img);
  item.appendChild(a);
  item.appendChild(des);
  item.appendChild(chti);
  item.appendChild(publid);
  item.appendChild(views);
  
  return item;
};

var get_data=function(i=0){
    const j=i+15;
    const content = document.getElementById('content_body');
    let search = document.getElementById("search_id").value;
    content.innerHTML = "";
    fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=50&q=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          data.items.forEach((item, index) => {
            if (i< index&& index < j) {
                console.log("index is "+index+" i is "+i)
              let x = card(item, API_KEY);
              content.appendChild(x);
            }
          });
        });
        addPagination();
}

