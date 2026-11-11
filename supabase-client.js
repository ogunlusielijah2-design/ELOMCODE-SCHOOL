/* =========================================================
   ELOMCODE SCHOOL — SHARED SUPABASE CONNECTION

   Founder: Elijah Opomulero
   Motto: Learn. Code. Build. Become.
========================================================= */

(function () {

    "use strict";

    const SUPABASE_URL =
        "https://icppxntqpxfwzmbeotay.supabase.co";

    const SUPABASE_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcHB4bnRxcHhmd3ptYmVvdGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwNjAyNzcsImV4cCI6MjEwOTYzNjI3N30.KjbKPQTqv4-IhhmtYZ-GCPpTThv6im_93e4XVBFLOeg";

    if (!window.supabase) {

        console.error(
            "ELOMCODE: Supabase library was not loaded."
        );

        return;

    }

    try {

        window.elomcodeSupabase =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
            );

        console.log(
            "ELOMCODE: Shared Supabase connection initialized."
        );

    } catch (error) {

        console.error(
            "ELOMCODE Supabase Error:",
            error
        );

    }

})();