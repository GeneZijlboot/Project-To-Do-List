(()=>{"use strict";const e=document.createElement("input"),t=document.createElement("form"),n=document.getElementById("Screen"),d=document.createElement("div");d.id=d,e.type="submit",e.style="cursor: pointer;",e.id="SubmitButton",t.id="AddTaskform";const l=document.createElement("div"),i=document.createElement("h2"),o=document.createElement("input"),a=document.createElement("br"),c=document.createElement("input"),p=document.createElement("br"),m=document.createElement("div"),u=document.createElement("label"),r=document.createElement("input"),s=document.createElement("br"),E=document.createElement("div"),C=document.createElement("label"),h=document.createElement("select"),v=document.createElement("option"),y=document.createElement("option"),T=document.createElement("option"),D=document.createElement("br");l.id="NewTask",i.class="text",u.for="DueDate",r.id="DueDate",C.for="Priority",h.id="Priority",m.style="display:flex;",o.id="Title",o.type="text",o.name="Title",o.placeholder="Title",r.type="date",r.name="DueDate",h.name="Priority",c.id="Description",c.type="text",c.name="Description",c.placeholder="Description",i.textContent="New Task",u.textContent="Due Date: ",C.textContent="Priority: ",v.value="Low",y.value="Medium",T.value="High",v.textContent="Low",y.textContent="Medium",T.textContent="High",function(){const e=document.getElementById("TaskBar"),t=document.createElement("p");t.textContent="To Do List",e.appendChild(t)}(),function(){const e=document.getElementById("TaskBar"),t=document.createElement("button");t.id="AddTaskButton",t.textContent="+ AddToDo",e.appendChild(t)}(),function(){const d=document.getElementById("AddTaskButton");d.addEventListener("click",(()=>{n.appendChild(l),l.appendChild(t),t.appendChild(i),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(p),t.appendChild(m),m.appendChild(u),m.appendChild(r),t.appendChild(s),t.appendChild(E),E.appendChild(C),E.appendChild(h),h.appendChild(v),h.appendChild(y),h.appendChild(T),t.appendChild(D),t.appendChild(e),console.log("test"),d.disabled=!0}))}(),function t(){let i=[];e.addEventListener("click",(e=>{e.preventDefault(),console.log(o.value,c.value,r.value,h.value),function(){let e=new t(document.getElementById("Title").value,document.getElementById("Title").value,document.getElementById("Title").value,document.getElementById("Title").value);i.push(e),function(){for(let e=0;e<i.length;e++){let t=i[e];d.innerHTML=`\n                <div id="ToDo">\n                    <p>test</p>\n                    <p>${t.Title}<p>\n                    <p>${t.Description}<p>\n                    <p>${t.DueDate2}<p>\n                    <p>${t.Priority2}<p>\n                </div>\n            `,n.appendChild(d),n.removeChild(l)}}()}()}))}()})();