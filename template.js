module.exports = function() {
    casper.test.begin('テストタイトル', function suite(test) {
        errors = [];
        casper.on("page.error", function(msg, trace){
            // this.echo('Error: ' + msg, "ERROR");
            errors.push(msg)
        });
        casper.start("http://example.com/", function() {
            // ここに処理をかく
            // test.assertTitle("Google", "google homepage title is the one expected");
            // test.assertExists('form[action="/search"]', "main form is found");
        });
        casper.then(function() {
            // ここに処理をかく
            test.assertEquals(errors, [], 'コンソールエラーが見つかりました');
        });
        casper.run(function() {
            test.done();
        });
    });
}
