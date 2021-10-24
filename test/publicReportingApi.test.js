const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');

describe('suite',()=>{
  it('test', () => {
    const attachment = {
      name: 'attachment.png',
      type: 'image/png',
      // content: data.toString('base64'),
    }
    PublicReportingAPI.log('INFO', 'Info log message for test "test" with attachment', attachment);
    PublicReportingAPI.launchLog('ERROR', 'Error log message for current launch with attachment', attachment);
    PublicReportingAPI.trace('Trace log message for test "test"', attachment);
    PublicReportingAPI.debug('Debug log message for test "test"');
    PublicReportingAPI.info('Info log message for test "test" with attachment');
    PublicReportingAPI.warn('Warning for test "test"');
    PublicReportingAPI.error('Error log message for test "test"');
    PublicReportingAPI.fatal('Fatal log message for test "test"');
  });
});
