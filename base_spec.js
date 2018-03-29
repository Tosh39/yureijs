// googletesting.js
casper.test.begin('Google search retrieves 10 or more results', 5, function suite(test) {
    errors = [];
    casper.on("page.error", function(msg, trace){
        // this.echo('Error: ' + msg, "ERROR");
        errors.push(msg)
    });
    casper.start("http://www.ajike.co.jp/", function() {
    });
    casper.then(function() {
       test.assertEquals(errors, [], 'コンソールエラーが見つかりました');
    });

    // casper.start("http://www.google.fr/", function() {
    //     test.assertTitle("Google", "google homepage title is the one expected");
    //     test.assertExists('form[action="/search"]', "main form is found");
    //     this.fill('form[action="/search"]', {
    //         q: "casperjs"
    //     }, true);
    // });

    // casper.then(function() {
    //     test.assertTitle("casperjs - Google 検索", "google title is ok");
    //     test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
    //     test.assertEval(function() {
    //         return __utils__.findAll("h3.r").length >= 10;
    //     }, "google search for \"casperjs\" retrieves 10 or more results");
    // });

    casper.run(function() {
        test.done();
    });
});
