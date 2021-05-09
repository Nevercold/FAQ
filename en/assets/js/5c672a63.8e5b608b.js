(self.webpackChunkpuh_faq=self.webpackChunkpuh_faq||[]).push([[573],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,k=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9352:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"ConnectWithFtpClient",title:"Wie verbinde ich mit einem FTP Client zu meinem Gameserver?"},l={unversionedId:"gameserver/ConnectWithFtpClient",id:"gameserver/ConnectWithFtpClient",isDocsHomePage:!1,title:"Wie verbinde ich mit einem FTP Client zu meinem Gameserver?",description:"Schritt 1",source:"@site/docs/gameserver/ConnectWithFtpClient.md",sourceDirName:"gameserver",slug:"/gameserver/ConnectWithFtpClient",permalink:"/en/docs/gameserver/ConnectWithFtpClient",editUrl:"https://github.com/PuhHosting/FAQ/edit/master/docs/gameserver/ConnectWithFtpClient.md",version:"current",lastUpdatedBy:"Alex G",lastUpdatedAt:1620547001,formattedLastUpdatedAt:"5/9/2021",frontMatter:{id:"ConnectWithFtpClient",title:"Wie verbinde ich mit einem FTP Client zu meinem Gameserver?"},sidebar:"someSidebar",previous:{title:"Mein Server startet nicht mehr",permalink:"/en/docs/gameserver/GameServerStartetNicht"},next:{title:"Kommt bald",permalink:"/en/docs/musicbot/musicsoon"}},u=[],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 1")),(0,i.kt)("p",null,"Lade dir einen FTP Client herunter, z.B. ",(0,i.kt)("a",{parentName:"p",href:"https://winscp.net/eng/download.php"},"WinSCP")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 2")),(0,i.kt)("p",null,'Gehe dann im Gameserver Panel auf den Punkt Settings. Hier siehst du im Bereich "SFTP Details" die notwendigen Daten zum Herstellen einer SFTP Verbindung zum Server.'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'PS. Wenn du einen Standard Client f\xfcr FTP Aktionen hinterlegt hast kannst du einfach auf "Launch SFTP" klicken und seid nach Eingabe des Kennworts sofort zum Server verbunden.'),"\n",(0,i.kt)("img",{parentName:"p",src:"https://puhscreen.de/1e2bb/kAFoRAfe47.png/raw",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 3")),(0,i.kt)("p",null,"Nun \xf6ffnen wir WinSCP und geben dort folgende Daten ein."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feld"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Beispielwert"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xdcbertragungsprotokoll"),(0,i.kt)("td",{parentName:"tr",align:"center"},"SFTP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Serveradresse"),(0,i.kt)("td",{parentName:"tr",align:"center"},"games-03.my-host.network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Portnummer"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Benutzername"),(0,i.kt)("td",{parentName:"tr",align:"center"},"alex.e0a44e1f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kennwort"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Kennwort vom Gamespanel")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Bitte durch die eigenen Daten ersetzen die in den "SFTP Details" zu finden sind!')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://puhscreen.de/1e2bb/vURIPodI01.png/raw",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 4")),(0,i.kt)("p",null,"Wenn die korrekten Daten angegeben wurden, dann haben wir nun eine Verbindung zum FTP Server und k\xf6nnen nun dar\xfcber Dateien hochladen / bearbeiten etc.\n",(0,i.kt)("img",{parentName:"p",src:"https://puhscreen.de/1e2bb/VuFeLEWI34.png/raw",alt:null})))}c.isMDXComponent=!0}}]);