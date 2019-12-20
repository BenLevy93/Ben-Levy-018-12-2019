export const searchT = [
  {
    Version: 1,
    Key: "226396",
    Type: "City",
    Rank: 10,
    LocalizedName: "Tokyo",
    Country: {
      ID: "JP",
      LocalizedName: "Japan"
    },
    AdministrativeArea: {
      ID: "13",
      LocalizedName: "Tokyo"
    }
  },
  {
    Version: 1,
    Key: "106770",
    Type: "City",
    Rank: 11,
    LocalizedName: "Taiyuan",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "SX",
      LocalizedName: "Shanxi"
    }
  },
  {
    Version: 1,
    Key: "106780",
    Type: "City",
    Rank: 11,
    LocalizedName: "Tianjin",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "TJ",
      LocalizedName: "Tianjin"
    }
  },
  {
    Version: 1,
    Key: "58491",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongren",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "GZ",
      LocalizedName: "Guizhou"
    }
  },
  {
    Version: 1,
    Key: "102324",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tangshan",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "HE",
      LocalizedName: "Hebei"
    }
  },
  {
    Version: 1,
    Key: "59573",
    Type: "City",
    Rank: 13,
    LocalizedName: "Taizhou",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "JS",
      LocalizedName: "Jiangsu"
    }
  },
  {
    Version: 1,
    Key: "60198",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongliao",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "NM",
      LocalizedName: "Inner Mongolia"
    }
  },
  {
    Version: 1,
    Key: "106571",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tai'an",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "SD",
      LocalizedName: "Shandong"
    }
  },
  {
    Version: 1,
    Key: "58055",
    Type: "City",
    Rank: 15,
    LocalizedName: "Tianshui",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "GS",
      LocalizedName: "Gansu"
    }
  },
  {
    Version: 1,
    Key: "2333653",
    Type: "City",
    Rank: 15,
    LocalizedName: "Taizhou",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "ZJ",
      LocalizedName: "Zhejiang"
    }
  }
];
export const tokyoData = [
  {
    LocalObservationDateTime: "2019-12-18T22:30:00+09:00",
    EpochTime: 1576675800,
    WeatherText: "Mostly cloudy",
    WeatherIcon: 38,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 10.1,
        Unit: "C",
        UnitType: 17
      },
      Imperial: {
        Value: 50,
        Unit: "F",
        UnitType: 18
      }
    },
    MobileLink:
      "http://m.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us",
    Link:
      "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us"
  }
];
export const tokyo5 = {
  Headline: {
    EffectiveDate: "2019-12-22T13:00:00+09:00",
    EffectiveEpochDate: 1576987200,
    Severity: 2,
    Text: "Expect rainy weather Sunday afternoon through Sunday evening",
    Category: "rain",
    EndDate: "2019-12-23T01:00:00+09:00",
    EndEpochDate: 1577030400,
    MobileLink:
      "http://m.accuweather.com/en/jp/tokyo/226396/extended-weather-forecast/226396?lang=en-us",
    Link:
      "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?lang=en-us"
  },
  DailyForecasts: [
    {
      Date: "2019-12-18T07:00:00+09:00",
      EpochDate: 1576620000,
      Temperature: {
        Minimum: {
          Value: 46,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 62,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us"
    },
    {
      Date: "2019-12-19T07:00:00+09:00",
      EpochDate: 1576706400,
      Temperature: {
        Minimum: {
          Value: 44,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 49,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate"
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us"
    },
    {
      Date: "2019-12-20T07:00:00+09:00",
      EpochDate: 1576792800,
      Temperature: {
        Minimum: {
          Value: 43,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 58,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false
      },
      Night: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us"
    },
    {
      Date: "2019-12-21T07:00:00+09:00",
      EpochDate: 1576879200,
      Temperature: {
        Minimum: {
          Value: 40,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 48,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 8,
        IconPhrase: "Dreary",
        HasPrecipitation: false
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us"
    },
    {
      Date: "2019-12-22T07:00:00+09:00",
      EpochDate: 1576965600,
      Temperature: {
        Minimum: {
          Value: 41,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 49,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate"
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate"
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&lang=en-us"
    }
  ]
};
