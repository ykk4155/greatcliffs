
            function currentTime() {
                var d = new Date();
                var hr = d.getHours();
                var min = d.getMinutes();
                var sec = d.getSeconds();
                var ampm;
                var utchr = d.getUTCHours();
                var timeDiff;
                var adjTimeDiff;
                var timeZone;
                if (sec < 10) {
                    sec = "0" + sec;
                }
                if (min < 10) {
                    min = "0" + min;
                }

                if (hr == 12) {
                    ampm = "PM"; 
                } else if (hr > 12) {
                    hr -= 12;
                    ampm = "PM";
                } else {
                    ampm = "AM";
                }
                // if (utchr=0) { 
                //     (utchr == 24);
                // }
                if (utchr > 12) {
                    utchr -= 12;
                } 
                if (utchr < hr) { 
                    utchr += 12;
                }
                timeDiff = utchr - hr;
                
                // console.log("timeDiff");
                if ( timeDiff < 0) {
                    adjTimeDiff = timeDiff * -1;
                } else {
                    adjTimeDiff = timeDiff
                }
                //console.log("adjTimeDiff")

                if (adjTimeDiff == 5) {
                    timeZone = "ET";
                }
                 else if (adjTimeDiff == 6) {
                    timeZone ="CT";
                }
                 else if (adjTimeDiff == 7) {
                    timeZone = "MT";
                }
                 else if (adjTimeDiff == 8) {
                    timeZone = "PT";
                } else { 
                    timeZone = "GMT";
                }
                var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
                document.getElementById("clock").innerText = time;
                setInterval(currentTime, 1000);
                document.getElementsByName;
                }
            currentTime();