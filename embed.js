function getDeviceId(){var e=navigator.userAgent,t=navigator.platform;return btoa(e+t)}function generateSessionId(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function setSessionCookie(e){var t,r="customgpt-session-"+e,n=getCookie(r);n?((t=new Date).setTime(t.getTime()+6048e5),document.cookie=r+"="+n+"; expires="+t.toGMTString()+"; path=/"):(n=generateSessionId(),(t=new Date).setTime(t.getTime()+6048e5),document.cookie=r+"="+n+"; expires="+t.toGMTString()+"; path=/");return n}function getCookie(e){var t=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(o.substring(0,e.length+1)==e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}function checkCookie(e){for(var t=document.cookie.split(";"),r=0;r<t.length;r++){if(t[r].trim().startsWith(e+"="))return!0}return!1}function refreshSessionId(e){var t="customgpt-session-"+e;return getCookie(t)&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"),setSessionCookie(e)}function def(e,t){return null!=e?e:t}function set_properties(e,t){var r=null;for(r in t){var n=t[r];"function"!=typeof n&&("object"==typeof n?set_properties(e[r],n):e[r]=n)}}function create_iframe(e){void 0===e&&(e={}),e.src=def(e.src,"about:blank"),e.border=def(e.border,"0"),e.padding=def(e.padding,"0"),e.frameBorder=def(e.frameBorder,"0"),e.marginWidth=def(e.marginWidth,"0"),e.marginHeight=def(e.margineHeight,"0"),e.vspace=def(e.vspace,"0"),e.hspace=def(e.hspace,"0"),e.scrolling=def(e.scrolling,"no"),e.className=def(e.className,""),e.width=def(e.width,"0"),e.height=def(e.height,"0"),e.style=def(e.style,{}),e.allow="clipboard-write;",e.style.margin=def(e.style.margin,"0"),e.style.padding=def(e.style.padding,"0");var t=document.createElement("iframe");return set_properties(t,e),t}function generateIFrameUrl(e,t,r,n,o,i,c,a){var s="";return s=t?"http://127.0.0.1:8000":"https://"+e+".customgpt.ai",s+="/projects/"+r+"/ask-me-anything/"+n+"?rs=embed&embed=1&shareable_slug="+o,i&&(s+="&prompt="+encodeURI(i)),c&&(s+="&affid="+encodeURI(c)),a&&(s+="&external_id="+encodeURI(a)),s}function customgpt_chat(){window;var e=document.currentScript.getAttribute("width")||"100%",t=document.currentScript.getAttribute("height")||"100%",r=document.currentScript.getAttribute("domain")||"app",n=document.currentScript.getAttribute("debug")||0,o=document.currentScript.getAttribute("local")||0,i=document.currentScript.getAttribute("p_id"),c=document.currentScript.getAttribute("p_key"),a=document.currentScript.getAttribute("div_id")||"customgpt_chat",s=document.currentScript.getAttribute("prompt")||"",d=document.currentScript.getAttribute("affid")||"",l=Number(document.currentScript.getAttribute("reset_conversation"))||0,u=document.currentScript.getAttribute("external_id")||"",p=document.getElementById(a);if(!i||!c)return void console.log("Project information is missing");var g=null;g=l?refreshSessionId(i):setSessionCookie(i);var m=generateIFrameUrl(r,o,i,g,c,s,d,u);n&&console.log(m);const h=document.createElement("div");h.className="cgptcb-chat-box-container";const x=document.createElement("div");x.className="cgptcb-chat-box-header",x.style.backgroundColor="#fff",x.style.borderBottom="1px solid #e6e6e6",x.style.width=e,x.style.height="var(--cgpt-chat-box-header-height)",x.style.display="flex",x.style.justifyContent="flex-end",x.style.alignItems="center",x.style.gap="1rem",x.appendChild(f);var b=create_iframe({src:m,width:e,height:t,scrolling:"yes"});p.appendChild(x),p.appendChild(b),p.appendChild(h),document.getElementById("cgptcb-chat-box-reset").addEventListener("click",(()=>{g=refreshSessionId(i),m=generateIFrameUrl(r,o,i,g,c,s=null,d),b.src=m}))}customgpt_chat();