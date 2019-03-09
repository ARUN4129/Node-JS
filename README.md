# Node-JS
This repository covers some measure topics of Nodejs
# What is Node.js?
<ul>
<li>Node.js is an open source server environment</li>
<li>Node.js is free</li>
<li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
<li>Node.js uses JavaScript on the server</li>
</ul>

# Why Node.js?
<pre>Node.js uses asynchronous programming!</pre>

A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:
<ol>
<li>Sends the task to the computer's file system.</li>
<li>Waits while the file system opens and reads the file.</li>
<li>Returns the content to the client.</li>
<li>Ready to handle the next request.</li>
</ol>
Here is how Node.js handles a file request:
<ol>
<li>Sends the task to the computer's file system.</li>
<li>Ready to handle the next request.</li>
<li>When the file system has opened and read the file, the server returns the content to the client.</li>
</ol>
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
