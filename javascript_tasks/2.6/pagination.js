const addPagination=()=>{
    const page_wrapper = document.getElementById('page-body');
    page_wrapper.innerHTML = "";
    const pagination = document.createElement("div");
        pagination.className = "pagination";
        var press=0;
        var numb=15;
        const prev_page = document.createElement("a");
        prev_page.innerHTML = "&laquo;";
        prev_page.onclick = () => {if(press!=0){press-=numb;} get_data(press);};
        const page1 = document.createElement("a");
        page1.className = "page";
        page1.innerHTML = "1";
        page1.onclick = () => {press=0; get_data(0);};
  
        const page2 = document.createElement("a");
        page2.className = "page";
        page2.innerHTML = "2";
        page2.onclick = () => { console.log('2');press=15; get_data(press); };
  
        const pagenext = document.createElement("a");
        pagenext.className = "page";
        pagenext.innerHTML = "&raquo;";
        pagenext.onclick = () => { console.log('&raquo;');press+=numb;get_data(press);};
  
        page_wrapper.appendChild(pagination);
        pagination.appendChild(prev_page);
        pagination.appendChild(page1);
        pagination.appendChild(page2);
        pagination.appendChild(pagenext);
  }


