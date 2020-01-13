function gatherHouseInfo() {
  let xhrOverrideScript = document.createElement('script');
  xhrOverrideScript.type = "text/javascript";
  xhrOverrideScript.innerHTML = `
  (function() {
    let XHR = XMLHttpRequest.prototype;
    let send = XHR.send;
    let open = XHR.open;

    XHR.open = function(method, url) {
      this.url = url;
      return open.apply(this, arguments);
    }

    XHR.send = function() {
      this.addEventListener("load", function() {
        if(this.url.includes("https://www.realtor.com")) {
          let dataDOMElement = document.createElement("div");
          dataDOMElement.id = "houseItems";
          dataDOMElement.innerText = this.response;
          dataDOMElement.style.height = 0;
          dataDOMElement.style.overflow = "hidden";
          document.body.appendChild(dataDOMElement);
        }
      });
      return send.apply(this, arguments);
    };
  })()
  `
  document.head.prepend(xhrOverrideScript);
}

function checkForDOM() {
  if(document.body && document.head) {
    gatherHouseInfo();
  } else {
    requestAnimationFrame(checkForDOM);
  }
}

requestAnimationFrame(checkForDOM);

function scrapeData() {
  let responseContainingEle = document.querySelector("div[id=ldp-address]");
  if(responseContainingEle) {
    let response = JSON.parse(responseContainingEle.innerHTML);
  } else {
    requestAnimationFrame(scrapeData);
  }
}

requestAnimationFrame(scrapeData);