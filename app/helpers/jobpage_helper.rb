module JobpageHelper

  def day(date)
    Date.parse(date.to_date.to_s).strftime("%d")
  end

  def month(date)
    Date::MONTHNAMES[Date.parse(date.to_date.to_s).strftime("%m").to_i]
  end

  def year(date)
    Date.parse(date.to_date.to_s).strftime("%y")
  end

  def past?(date)
  end

  def success?(bool)
    bool == true ? "Success" : "Rejected"
  end

end
