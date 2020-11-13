exports.filter = function (req, next) {
    log.info('The filter is triggered!');
    var response = next(req); // Continue request pipeline
    // Looks like this little line here destroys our error handler, handle404 and passes any URL to the closest match.
    // Bug is reported to Enonic, they've labelled it as an improvement as of October 9. https://github.com/enonic/xp/issues/8417
    // /design/icons/whatever will show me /design/icons page, and /design/whatever will show me /design page. Nor very helpful behaviour.
    return response;
};
