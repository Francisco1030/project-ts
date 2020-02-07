# TS

1 - You can install tsc by running following command:

        npm install -g typescript

2 - Creating a basic typescript code that will print “Greetings from Geeks For Geeks” :

        filter_none
        brightness_4
        var greet: string = "Greetings"; 
        var geeks: string = "Geeks For Geeks"; 
        console.log(greet + " from " + geeks); 
        // save the file as hello.ts 
        
3 - To compile typescript code we can run the following command on the command line :
        
        tsc hello.ts
        
This command will generate a javascript file with name hello.js

4 - Run the javascript file using the following command on command line :
 
        node hello.js
