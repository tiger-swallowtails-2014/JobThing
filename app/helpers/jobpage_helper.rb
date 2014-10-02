module JobpageHelper

  def applied?
    @jobthing.applied ? true : false
  end

  def interviews?
    @jobthing.interviews ? true : false
  end

  def miscjobthings?
    @jobthing.miscjobthings ? true : false
  end

  def outcome?
    @jobthing.outcome ? true : false
  end

  def notes?
    @jobthing.notes ? true : false
  end

  def contacts?
    @jobthing.contacts ? true : false
  end

  def day(date)
    Date.parse(date.to_date.to_s).strftime("%d")
  end

  def month(date)
    Date::MONTHNAMES[Date.parse(date.to_date.to_s).strftime("%m").to_i]
  end

  def year(date)
    Date.parse(date.to_date.to_s).strftime("%y")
  end

  def day_diff(date1, date2)
    date1 - date2
  end

  def past?(date)
    date < ::Date.current
  end

  def success?(bool)
    bool == true ? "Success" : "Rejected"
  end

  def past_interviews?
  end

end
