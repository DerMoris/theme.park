 //Custom Text Header //
 // ASCII slant font
// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\
let custom_text_header = `
<div class="custom-text-header"> <pre>                   _                  __                     
   ____ ___  ____ ( )_______  _______/ /____  ____ ___  _____
  / __ \`__ \\/ __ \\|// ___/ / / / ___/ __/ _ \\/ __ \`__ \\/ ___/
 / / / / / / /_/ / (__  ) /_/ (__  ) /_/  __/ / / / / (__  ) 
/_/ /_/ /_/\\____/ /____/\\__, /____/\\__/\\___/_/ /_/ /_/____/  
                       /____/                                </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
