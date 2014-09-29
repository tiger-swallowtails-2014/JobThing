describe("JobPage", function(){
  it("binds to click on .item",function(){
    var timesTriggered = 0;
    JobPage.renderJobPage = function(){timesTriggered += 1}
    JobPage.bindEvents()
    (".item").trigger("click")

    expect(timesTriggered).toBe(1)
  })
});