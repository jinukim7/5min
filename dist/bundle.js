(() => {
  // src/js/etiquette-data.js
  var ETIQUETTE_DOMAINS = [
    {
      id: "arrival",
      title: "\uB4F1\uAD50 \uC608\uC808",
      icon: "\u{1F3EB}",
      badge: "Morning Routine",
      color: "#3B82F6",
      guidelines: [
        {
          id: "arrival_1",
          rule: "\uC120\uC0DD\uB2D8\uACFC \uBC30\uC6C0\uD130 \uC9C0\uD0B4\uC774 \uC120\uC0DD\uB2D8\uAED8 \uACF5\uC190\uD55C \uC778\uC0AC",
          desc: '\uAD50\uBB38\uACFC \uD604\uAD00\uC5D0\uC11C \uBA48\uCD94\uC5B4 \uC11C\uC11C \uB208\uC744 \uB9C8\uC8FC\uCE58\uBA70 "\uC120\uC0DD\uB2D8, \uC88B\uC740 \uC544\uCE68\uC785\uB2C8\uB2E4!" \uD558\uACE0 \uD5C8\uB9AC\uB97C \uC219\uC5EC \uBC14\uB974\uAC8C \uC778\uC0AC\uD569\uB2C8\uB2E4.',
          points: 5
        },
        {
          id: "arrival_2",
          rule: "\uBCF4\uD589 \uC548\uC804\uC744 \uC704\uD574 \uC2A4\uB9C8\uD2B8\uD3F0\uACFC \uC774\uC5B4\uD3F0 \uBCF4\uAD00",
          desc: "\uB4F1\uAD63\uAE38 \uD6A1\uB2E8\uBCF4\uB3C4\uB098 \uACE8\uBAA9\uAE38\uC744 \uAC78\uC744 \uB54C\uB294 \uC2A4\uB9C8\uD2B8\uD3F0 \uC601\uC0C1\uC744 \uBCF4\uAC70\uB098 \uC74C\uC545\uC744 \uB4E3\uC9C0 \uC54A\uACE0, \uD3F0\uC740 \uAC00\uBC29\uC5D0 \uB123\uACE0 \uC774\uC5B4\uD3F0\uC740 \uBE8D\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "arrival_3",
          rule: "\uB4F1\uAD63\uAE38 \uCE5C\uAD6C\uB97C \uB9CC\uB098\uBA74 \uBC18\uAC11\uAC8C \uC778\uC0AC",
          desc: "\uB9C8\uC8FC\uCE58\uB294 \uD559\uAE09 \uCE5C\uAD6C\uB4E4\uACFC \uC120\uD6C4\uBC30\uB4E4\uC5D0\uAC8C \uBC1D\uC740 \uBBF8\uC18C\uC640 \uBAA9\uC18C\uB9AC\uB85C \uBA3C\uC800 \uC548\uBD80\uB97C \uAC74\uB135\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "arrival_4",
          rule: "\uC790\uC804\uAC70\xB7\uC804\uB3D9\uD0A5\uBCF4\uB4DC \uB4F1\uD558\uAD50 \uC548\uC804 \uC218\uCE59 \uC900\uC218",
          desc: "\uBCF4\uD638\uC7A5\uAD6C(\uD5EC\uBA67)\uB97C \uBC18\uB4DC\uC2DC \uCC29\uC6A9\uD558\uBA70, \uAD50\uBB38 \uC9C4\uC785 \uC804\uC5D0\uB294 \uC790\uC804\uAC70\uC5D0\uC11C \uB0B4\uB824 \uB04C\uACE0 \uC548\uC804\uD558\uAC8C \uBCF4\uD589\uD569\uB2C8\uB2E4.",
          points: 5
        }
      ]
    },
    {
      id: "hallway",
      title: "\uAD50\uC2E4\uACFC \uBCF5\uB3C4 \uC608\uC808",
      icon: "\u{1F6B6}",
      badge: "Class & Hallway",
      color: "#10B981",
      guidelines: [
        {
          id: "hallway_1",
          rule: "\uBE44\uC18D\uC5B4 \uB300\uC2E0 \uCE5C\uAD6C\uB97C \uC874\uC911\uD558\uB294 \uC5B8\uC5B4 \uC0AC\uC6A9",
          desc: "\uC695\uC124, \uD610\uC624 \uD45C\uD604, \uB0A8\uC744 \uAE4E\uC544\uB0B4\uB9AC\uB294 \uC904\uC784\uB9D0 \uB300\uC2E0 \uC0C1\uB300\uBC29\uC758 \uAE30\uBD84\uC744 \uBC30\uB824\uD558\uB294 \uB530\uB73B\uD558\uACE0 \uACE0\uC6B4 \uB9D0\uC744 \uC501\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "hallway_2",
          rule: "\uBD80\uB52A\uCE58\uAC70\uB098 \uBD80\uC8FC\uC758\uD588\uC744 \uB54C \uC989\uC2DC \uC9C4\uC2EC \uC5B4\uB9B0 \uC0AC\uACFC",
          desc: '\uBCF5\uB3C4\uC5D0\uC11C \uCE5C\uAD6C\uC640 \uBD80\uB52A\uCE58\uAC70\uB098 \uBC1C\uC744 \uBC1F\uC558\uC744 \uB54C\uB294 \uB2F9\uD669\uD558\uAC70\uB098 \uC9DC\uC99D\uB0B4\uC9C0 \uC54A\uACE0 "\uBBF8\uC548\uD574, \uB2E4\uCE58\uC9C0 \uC54A\uC558\uC5B4?" \uD558\uACE0 \uBA3C\uC800 \uC0B4\uD54D\uB2C8\uB2E4.',
          points: 5
        },
        {
          id: "hallway_3",
          rule: "\uBCF5\uB3C4\uC640 \uACC4\uB2E8\uC5D0\uC11C \uC6B0\uCE21\uBCF4\uD589 \uBC0F \uC548\uC804 \uC774\uB3D9",
          desc: "\uC26C\uB294 \uC2DC\uAC04\uC774\uB098 \uC774\uB3D9 \uC218\uC5C5 \uC2DC \uC808\uB300 \uB6F0\uC9C0 \uC54A\uACE0 \uC624\uB978\uCABD\uC73C\uB85C \uCC9C\uCC9C\uD788 \uAC78\uC73C\uBA70 \uBAA8\uD241\uC774\uC5D0\uC11C\uB294 \uC18D\uB3C4\uB97C \uC904\uC785\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "hallway_4",
          rule: "\uB2E4\uB978 \uBC18 \uAD50\uC2E4 \uC218\uC5C5 \uBC29\uD574 \uAE08\uC9C0",
          desc: "\uC774\uB3D9 \uC218\uC5C5\uC744 \uC704\uD574 \uB2E4\uB978 \uBC18 \uC55E\uC744 \uC9C0\uB098\uAC08 \uB54C\uB294 \uCC3D\uBB38\uC73C\uB85C \uC548\uC744 \uB4E4\uC5EC\uB2E4\uBCF4\uAC70\uB098 \uD070 \uC18C\uB9AC\uB85C \uB5A0\uB4E4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
          points: 5
        }
      ]
    },
    {
      id: "cafeteria",
      title: "\uAE09\uC2DD\uC2E4 \uC608\uC808",
      icon: "\u{1F371}",
      badge: "Cafeteria",
      color: "#F59E0B",
      guidelines: [
        {
          id: "cafeteria_1",
          rule: "\uC0C8\uCE58\uAE30 \uBC0F \uC790\uB9AC \uB9E1\uAE30 \uC808\uB300 \uAE08\uC9C0",
          desc: "\uBC30\uC2DD\uAD6C \uC55E\uC5D0\uC11C \uCE5C\uAD6C\uB97C \uB07C\uC6CC\uC8FC\uAC70\uB098 \uC790\uB9AC \uB9E1\uAE30\uB97C \uD558\uC9C0 \uC54A\uACE0 \uC628 \uC21C\uC11C\uB300\uB85C \uBC14\uB974\uAC8C \uD55C \uC904 \uC11C\uAE30\uB97C \uC9C0\uD0B5\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "cafeteria_2",
          rule: "\uC601\uC591\uC0AC \uC120\uC0DD\uB2D8\uACFC \uC870\uB9AC\uC2E4\uBB34\uC0AC\uB2D8\uAED8 \uAC10\uC0AC \uC778\uC0AC",
          desc: '\uC74C\uC2DD\uC744 \uBC30\uC2DD\uBC1B\uC744 \uB54C\uB294 "\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uC798 \uBA39\uACA0\uC2B5\uB2C8\uB2E4"\uB77C\uACE0 \uB208\uC744 \uB9DE\uCD94\uBA70 \uACF5\uC190\uD558\uAC8C \uAC10\uC0AC\uB97C \uD45C\uD604\uD569\uB2C8\uB2E4.',
          points: 5
        },
        {
          id: "cafeteria_3",
          rule: "\uB2E8\uC815\uD558\uACE0 \uCCAD\uACB0\uD55C \uC2DD\uC0AC \uD0DC\uB3C4",
          desc: "\uC2DD\uC0AC \uC911 \uD070 \uC18C\uB9AC\uB85C \uB5A0\uB4E4\uAC70\uB098 \uC74C\uC2DD\uBB3C\uC744 \uD280\uAE30\uC9C0 \uC54A\uACE0, \uD758\uB9B0 \uC74C\uC2DD\uC740 \uD734\uC9C0\uB85C \uC2A4\uC2A4\uB85C \uAE68\uB057\uC774 \uB2E6\uC2B5\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "cafeteria_4",
          rule: "\uC794\uBC18 \uC904\uC774\uAE30 \uBC0F \uC62C\uBC14\uB978 \uC2DD\uD310\xB7\uC218\uC800 \uBC18\uB0A9",
          desc: "\uBA39\uC744 \uB9CC\uD07C\uB9CC \uBC1B\uACE0, \uB2E4 \uBA39\uC740 \uC2DD\uD310\uC740 \uC794\uBC18\uC744 \uAE54\uB054\uD788 \uBE44\uC6B4 \uB4A4 \uC218\uC800\uD1B5\uACFC \uC2DD\uD310\uB300\uC5D0 \uC815\uB3C8\uD558\uC5EC \uCC28\uB840\uB85C \uBC18\uB0A9\uD569\uB2C8\uB2E4.",
          points: 5
        }
      ]
    },
    {
      id: "class_debeot",
      title: "\uC218\uC5C5\uC2DC & \uB514\uBC97 \uC608\uC808",
      icon: "\u{1F4BB}",
      badge: "Class & Digital",
      color: "#8B5CF6",
      guidelines: [
        {
          id: "class_debeot_1",
          rule: "\uC608\uBE44\uC885 \uC6B8\uB9AC\uBA74 \uC790\uB9AC \uCC29\uC11D \uBC0F \uC218\uC5C5 \uC900\uBE44",
          desc: "\uC885\uC774 \uC6B8\uB9AC\uAE30 \uC804 \uAD50\uACFC\uC11C, \uD544\uAE30\uAD6C, \uD544\uC694\uD55C \uD559\uC2B5\uC9C0\uB97C \uCC45\uC0C1 \uC704\uC5D0 \uB2E8\uC815\uD788 \uB450\uACE0 \uBC14\uB978 \uC790\uC138\uB85C \uCC29\uC11D\uD569\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "class_debeot_2",
          rule: "\uC120\uC0DD\uB2D8 \uC124\uBA85 \uC911 \uB514\uBC97 \uD654\uBA74 \uB36E\uAE30(\uD654\uBA74 \uC5CE\uC5B4\uB450\uAE30)",
          desc: "\uB514\uBC97(\uD0DC\uBE14\uB9BF)\uC740 \uC120\uC0DD\uB2D8\uC758 \uC9C0\uC2DC\uAC00 \uC788\uC744 \uB54C\uB9CC \uCF1C\uACE0, \uC124\uBA85 \uC911\uC5D0\uB294 \uD654\uBA74\uC744 \uB36E\uC5B4\uB450\uC5B4 \uC2DC\uC120\uC744 \uC120\uC0DD\uB2D8\uAED8 \uC9D1\uC911\uD569\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "class_debeot_3",
          rule: "\uC218\uC5C5 \uC911 \uBE44\uD559\uC2B5 \uBAA9\uC801 \uAE30\uAE30 \uC0AC\uC6A9 \uC808\uB300 \uAE08\uC9C0",
          desc: "\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uAC8C\uC784, \uC720\uD29C\uBE0C \uC2DC\uCCAD, SNS, \uCE5C\uAD6C\uC640\uC758 \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uB4F1 \uB534\uC9D3\uC744 \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "class_debeot_4",
          rule: "\uC190\uC744 \uB4E4\uACE0 \uC9C0\uBAA9\uBC1B\uC740 \uD6C4 \uBC1C\uC5B8 & \uCE5C\uAD6C \uBC1C\uD45C \uACBD\uCCAD",
          desc: "\uC9C8\uBB38\uC774\uB098 \uC758\uACAC\uC774 \uC788\uC744 \uB54C\uB294 \uC790\uB9AC\uC5D0 \uC549\uC544 \uC870\uC6A9\uD788 \uC190\uC744 \uB4E4\uACE0 \uC9C0\uBAA9\uBC1B\uC740 \uB4A4 \uBC1C\uC5B8\uD558\uBA70, \uCE5C\uAD6C\uC758 \uBC1C\uD45C\uB97C \uBE44\uC6C3\uC9C0 \uC54A\uACE0 \uACBD\uCCAD\uD569\uB2C8\uB2E4.",
          points: 5
        }
      ]
    },
    {
      id: "dismissal",
      title: "\uD558\uAD50 \uC608\uC808",
      icon: "\u{1F392}",
      badge: "Dismissal",
      color: "#EF4444",
      guidelines: [
        {
          id: "dismissal_1",
          rule: "\uC120\uC0DD\uB2D8\uACFC \uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uC815\uC911\uD55C \uD558\uAD50 \uC778\uC0AC",
          desc: '\uC885\uB840 \uD6C4 \uB2F4\uC784\uC120\uC0DD\uB2D8\uAED8 "\uC120\uC0DD\uB2D8 \uC548\uB155\uD788 \uACC4\uC138\uC694, \uAC10\uC0AC\uD569\uB2C8\uB2E4!" \uC778\uC0AC\uD558\uACE0 \uCE5C\uAD6C\uB4E4\uC5D0\uAC8C\uB3C4 \uB0B4\uC77C \uB9CC\uB0A0 \uAC83\uC744 \uB2E4\uC815\uD788 \uC778\uC0AC\uD569\uB2C8\uB2E4.',
          points: 5
        },
        {
          id: "dismissal_2",
          rule: "\uB514\uBC97 \uCDA9\uC804\uD568 \uBCF4\uAD00 \uBC0F \uCC45\uC0C1\xB7\uC0AC\uBB3C\uD568 \uC815\uB9AC",
          desc: "\uC624\uB298 \uC0AC\uC6A9\uD55C \uB514\uBC97\uC744 \uD559\uAE09 \uCDA9\uC804\uD568 \uBCF8\uC778 \uBC88\uD638 \uC790\uB9AC\uC5D0 \uAF42\uC544 \uCDA9\uC804\uC744 \uD655\uC778\uD558\uACE0 \uCC45\uC0C1 \uC704 \uC4F0\uB808\uAE30\uB97C \uBE44\uC6C1\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "dismissal_3",
          rule: "\uAD50\uBB38 \uBC16 \uAD50\uD1B5\uC548\uC804 \uC218\uCE59 \uCCA0\uC800 \uC900\uC218",
          desc: "\uC2E0\uD638\uB4F1\uC744 \uC9C0\uD0A4\uACE0 \uBB34\uB2E8\uD6A1\uB2E8\uC744 \uC808\uB300 \uD558\uC9C0 \uC54A\uC73C\uBA70, \uD558\uAD50\uAE38 \uD6A1\uB2E8\uBCF4\uB3C4\uB97C \uAC74\uB110 \uB54C\uB294 \uC2A4\uB9C8\uD2B8\uD3F0\uC744 \uBCF4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
          points: 5
        },
        {
          id: "dismissal_4",
          rule: "\uD558\uAD50 \uD6C4 \uC18C\uB780 \uBC0F \uD1B5\uD589 \uBC29\uD574 \uAE08\uC9C0",
          desc: "\uAD50\uBB38 \uC55E\uC774\uB098 \uC0C1\uAC00 \uC8FC\uBCC0\uC5D0\uC11C \uBB34\uB9AC\uC9C0\uC5B4 \uAE38\uC744 \uB9C9\uAC70\uB098 \uC18C\uB780\uC744 \uD53C\uC6B0\uC9C0 \uC54A\uACE0 \uC548\uC804\uD558\uAC8C \uADC0\uAC00\uD569\uB2C8\uB2E4.",
          points: 5
        }
      ]
    }
  ];
  var INITIAL_TEACHER_PROPOSALS = [
    {
      id: "prop_1",
      proposer: "\uC774\uC0C1\uD601 \uC120\uC0DD\uB2D8 (2-3 \uB2F4\uC784)",
      date: "2026-09-12",
      domainId: "class_debeot",
      rule: "\uB514\uBC97 \uBC30\uD130\uB9AC 50% \uC774\uC0C1 \uCDA9\uC804 \uC0C1\uD0DC\uB85C \uB4F1\uAD50\uD558\uAE30",
      desc: "\uC218\uC5C5 \uC911 \uCDA9\uC804\uAE30 \uC5F0\uACB0\uB85C \uC778\uD55C \uC774\uB3D9 \uBD88\uD3B8\uACFC \uC548\uC804\uC0AC\uACE0\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC9D1\uC5D0\uC11C 50% \uC774\uC0C1 \uCDA9\uC804\uD574 \uC635\uB2C8\uB2E4.",
      votes: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      // 7 votes out of 10 = 70%
      totalTeachers: 10,
      status: "approved",
      // 70% reached -> approved
      approvedDate: "2026-09-13"
    },
    {
      id: "prop_2",
      proposer: "\uBC15\uC9C4\uC601 \uC120\uC0DD\uB2D8 (\uD559\uC0DD\uC548\uC804\uBD80)",
      date: "2026-09-13",
      domainId: "arrival",
      rule: "\uBE44 \uC624\uB294 \uB0A0 \uC6B0\uC0B0 \uAD50\uC2E4 \uBC18\uC785 \uC804 \uBB3C\uAE30 \uD138\uACE0 \uC6B0\uC0B0 \uBE44\uB2D0 \uB610\uB294 \uAF42\uC774 \uBCF4\uAD00",
      desc: "\uBCF5\uB3C4 \uBC14\uB2E5 \uBBF8\uB044\uB7FC \uC0AC\uACE0 \uBC29\uC9C0\uB97C \uC704\uD574 \uD604\uAD00\uC5D0\uC11C \uC6B0\uC0B0 \uD138\uAE30 \uD6C4 \uAD50\uC2E4 \uC6B0\uC0B0\uAF42\uC774\uC5D0 \uB2E8\uC815\uD788 \uB123\uC2B5\uB2C8\uB2E4.",
      votes: ["t1", "t2", "t3", "t4", "t5", "t6"],
      // 6 votes out of 10 = 60%
      totalTeachers: 10,
      status: "pending"
      // need 7 votes (70%)
    },
    {
      id: "prop_3",
      proposer: "\uC815\uC740\uC9C0 \uC120\uC0DD\uB2D8 (2\uD559\uB144 \uAD6D\uC5B4\uACFC)",
      date: "2026-09-13",
      domainId: "hallway",
      rule: '\uAD50\uBB34\uC2E4 \uBC0F \uD2B9\uBCC4\uC2E4 \uCD9C\uC785 \uC2DC "\uC2E4\uB840\uD569\uB2C8\uB2E4" \uC778\uC0AC \uD6C4 \uB178\uD06C\uD558\uAE30',
      desc: "\uC120\uC0DD\uB2D8\uB4E4\uC758 \uC5C5\uBB34 \uACF5\uAC04\uACFC \uD2B9\uBCC4\uC2E4 \uCD9C\uC785 \uC2DC \uC608\uC758 \uBC14\uB974\uAC8C 3\uD68C \uAC00\uBCCD\uAC8C \uB178\uD06C\uD558\uACE0 \uC18C\uC18D\uC744 \uBC1D\uD799\uB2C8\uB2E4.",
      votes: ["t1", "t2", "t3", "t4"],
      // 4 votes = 40%
      totalTeachers: 10,
      status: "pending"
    }
  ];
  var MIDDLE_SCHOOL_QUIZZES = [
    {
      id: "mq1",
      category: "\uB4F1\uAD50 \uC608\uC808",
      domainId: "arrival",
      question: "\uC544\uCE68 \uB4F1\uAD63\uAE38 \uD6A1\uB2E8\uBCF4\uB3C4\uB97C \uAC74\uB110 \uB54C \uAC00\uC7A5 \uC62C\uBC14\uB978 \uD0DC\uB3C4\uB294 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
      options: [
        "\uC2A4\uB9C8\uD2B8\uD3F0\uC73C\uB85C \uC778\uAE30 \uC720\uD29C\uBE0C \uC1FC\uCE20\uB97C \uBCF4\uBA70 \uCC9C\uCC9C\uD788 \uAC77\uB294\uB2E4.",
        "\uC74C\uC545 \uBCFC\uB968\uC744 \uCD5C\uB300\uB85C \uD0A4\uC6B4 \uC774\uC5B4\uD3F0\uC744 \uB07C\uACE0 \uCC28\uAC00 \uC624\uB294\uC9C0 \uC0B4\uD53C\uC9C0 \uC54A\uB294\uB2E4.",
        "\uC2A4\uB9C8\uD2B8\uD3F0\uC740 \uAC00\uBC29\uC5D0 \uB123\uACE0 \uC774\uC5B4\uD3F0\uC744 \uBE80 \uB4A4, \uC88C\uC6B0\uB97C \uD655\uC778\uD558\uACE0 \uC548\uC804\uD558\uAC8C \uAC74\uB10C\uB2E4.",
        "\uCD08\uB85D\uBD88\uC774 \uAE5C\uBE61\uC77C \uB54C \uC804\uC18D\uB825\uC73C\uB85C \uB6F0\uC5B4\uB4E0\uB2E4."
      ],
      answer: 2,
      explanation: "\uBCF4\uD589 \uC911 \uC2A4\uB9C8\uD2B8\uD3F0\uACFC \uC774\uC5B4\uD3F0 \uC0AC\uC6A9\uC740 \uC8FC\uBCC0\uC758 \uACBD\uC801\uC774\uB098 \uC704\uD5D8\uC744 \uC778\uC9C0\uD558\uC9C0 \uBABB\uD558\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4. \uC2A4\uB9C8\uD2B8\uD3F0\uC740 \uAC00\uBC29\uC5D0 \uB123\uACE0 \uC8FC\uC704\uB97C \uC0B4\uD53C\uB294 \uAC83\uC774 \uC0DD\uBA85\uC744 \uC9C0\uD0A4\uB294 \uAE30\uBCF8 \uC608\uC808\uC785\uB2C8\uB2E4.",
      points: 30
    },
    {
      id: "mq2",
      category: "\uAD50\uC2E4\xB7\uBCF5\uB3C4 \uC608\uC808",
      domainId: "hallway",
      question: "\uC26C\uB294 \uC2DC\uAC04\uC5D0 \uBCF5\uB3C4 \uBAA8\uD241\uC774\uB97C \uB3CC\uB2E4\uAC00 \uB2E4\uB978 \uBC18 \uCE5C\uAD6C\uC640 \uAC15\uD558\uAC8C \uBD80\uB52A\uCCE4\uC744 \uB54C \uB098\uC758 \uD589\uB3D9\uC740?",
      options: [
        '"\uC55E \uC880 \uB611\uBC14\uB85C \uBCF4\uACE0 \uB2E4\uB140!"\uB77C\uACE0 \uD654\uB97C \uB0B4\uACE0 \uC9C0\uB098\uAC04\uB2E4.',
        '\uCE5C\uAD6C\uC758 \uC0C1\uD0DC\uB97C \uBA3C\uC800 \uC0B4\uD53C\uBA70 "\uBBF8\uC548\uD574! \uC5B4\uB514 \uB2E4\uCE5C \uACF3\uC740 \uC5C6\uC5B4?" \uD558\uACE0 \uC9C4\uC2EC\uC73C\uB85C \uC0AC\uACFC\uD55C\uB2E4.',
        "\uBD80\uB044\uB7EC\uC6B0\uB2C8 \uBABB \uBCF8 \uCC99\uD558\uACE0 \uB3C4\uB9DD\uCE58\uB4EF \uC6B0\uB9AC \uBC18\uC73C\uB85C \uB4E4\uC5B4\uAC04\uB2E4.",
        "\uCE5C\uAD6C\uC758 \uBA71\uC0B4\uC744 \uC7A1\uACE0 \uB204\uAD6C \uC798\uBABB\uC778\uC9C0 \uB530\uC9C4\uB2E4."
      ],
      answer: 1,
      explanation: "\uC758\uB3C4\uCE58 \uC54A\uC740 \uC2E0\uCCB4 \uC811\uCD09\uC774\uB098 \uC0AC\uACE0\uC5D0\uC11C\uB294 \uAC10\uC815\uC744 \uC55E\uC138\uC6B0\uAE30\uBCF4\uB2E4 \uC989\uC2DC \uCE5C\uAD6C\uC758 \uBD80\uC0C1 \uC5EC\uBD80\uB97C \uC0B4\uD53C\uACE0 \uC815\uC911\uD558\uAC8C \uC0AC\uACFC\uD558\uB294 \uAC83\uC774 \uC131\uC219\uD55C \uC911\uD559\uC0DD\uC758 \uD0DC\uB3C4\uC785\uB2C8\uB2E4.",
      points: 30
    },
    {
      id: "mq3",
      category: "\uAE09\uC2DD\uC2E4 \uC608\uC808",
      domainId: "cafeteria",
      question: '\uAE09\uC2DD\uC2E4\uC5D0\uC11C \uAE34 \uC904\uC744 \uC11C \uC788\uC744 \uB54C \uCE5C\uD55C \uCE5C\uAD6C\uAC00 "\uB098 \uC5EC\uAE30 \uC880 \uB07C\uC6CC\uC918"\uB77C\uACE0 \uBD80\uD0C1\uD55C\uB2E4\uBA74?',
      options: [
        "\uCE5C\uD55C \uCE5C\uAD6C\uB2C8\uAE4C \uC544\uBB34 \uB9D0 \uC5C6\uC774 \uB0B4 \uC55E\uC5D0 \uC138\uC6CC\uC900\uB2E4.",
        '"\uB4A4\uC5D0 \uC904 \uC120 \uB2E4\uB978 \uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uD53C\uD574\uAC00 \uAC00\uB2C8\uAE4C, \uBBF8\uC548\uD558\uC9C0\uB9CC \uB9E8 \uB4A4\uB85C \uAC00\uC11C \uC11C\uC790"\uB77C\uACE0 \uC815\uC911\uD788 \uAC70\uC808\uD55C\uB2E4.',
        "\uCE5C\uAD6C\uB97C \uB07C\uC6CC\uC8FC\uACE0 \uB2E4\uB978 \uD559\uC0DD\uC774 \uCCD0\uB2E4\uBCF4\uBA74 \uC9F8\uB824\uBCF8\uB2E4.",
        "\uC120\uC0DD\uB2D8\uC774 \uC548 \uACC4\uC2DC\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uC0B4\uC9DD \uB07C\uC6CC\uC900\uB2E4."
      ],
      answer: 1,
      explanation: "\uAE09\uC2DD\uC2E4 \uC904\uC11C\uAE30\uB294 \uACF5\uACF5 \uADDC\uCE59\uC785\uB2C8\uB2E4. \uCE5C\uBD84\uC744 \uC774\uC720\uB85C \uC0C8\uCE58\uAE30\uB97C \uD5C8\uC6A9\uD558\uB294 \uAC83\uC740 \uB4A4\uC5D0 \uC120 \uBAA8\uB4E0 \uCE5C\uAD6C\uC758 \uC2DC\uAC04\uC744 \uBE7C\uC557\uB294 \uBC30\uB824 \uC5C6\uB294 \uD589\uB3D9\uC785\uB2C8\uB2E4.",
      points: 30
    },
    {
      id: "mq4",
      category: "\uC218\uC5C5 & \uB514\uBC97 \uC608\uC808",
      domainId: "class_debeot",
      question: "\uC120\uC0DD\uB2D8\uAED8\uC11C \uCE60\uD310\uC5D0 \uAC1C\uB150\uC744 \uD310\uC11C\uD558\uBA70 \uC124\uBA85\uD558\uACE0 \uACC4\uC2E4 \uB54C, \uB514\uBC97(\uD0DC\uBE14\uB9BF)\uC740 \uC5B4\uB5BB\uAC8C \uB2E4\uB8E8\uC5B4\uC57C \uD560\uAE4C\uC694?",
      options: [
        "\uC120\uC0DD\uB2D8 \uBAB0\uB798 \uCE5C\uAD6C\uC640 \uD654\uBA74 \uBD84\uD560\uB85C \uC6F9\uD230\uC744 \uBCF8\uB2E4.",
        "\uD654\uBA74 \uB36E\uAC1C\uB97C \uB2EB\uAC70\uB098 \uD654\uBA74\uC744 \uC5CE\uC5B4\uB450\uACE0 \uC2DC\uC120\uC744 \uC120\uC0DD\uB2D8\uACFC \uCE60\uD310\uC73C\uB85C \uD5A5\uD55C\uB2E4.",
        "\uC18C\uB9AC\uB97C \uB044\uACE0 \uAC8C\uC784 \uC790\uB3D9\uC0AC\uB0E5\uC744 \uB3CC\uB824\uB454\uB2E4.",
        "\uC120\uC0DD\uB2D8\uC758 \uBAA8\uC2B5\uC744 \uCE74\uBA54\uB77C\uB85C \uBAB0\uB798 \uCD2C\uC601\uD558\uC5EC \uB2E8\uD1A1\uBC29\uC5D0 \uC62C\uB9B0\uB2E4."
      ],
      answer: 1,
      explanation: "\uC218\uC5C5 \uC911 \uC120\uC0DD\uB2D8\uC758 \uAC15\uC758\uC640 \uC124\uBA85 \uC2DC\uAC04\uC5D0\uB294 \uD654\uBA74\uC744 \uB36E\uAC70\uB098 \uC5CE\uC5B4\uB450\uC5B4 \uC8FC\uC758\uB97C \uC9D1\uC911\uD558\uB294 \uAC83\uC774 \uC120\uC0DD\uB2D8\uACFC \uD559\uAE09 \uAD6C\uC131\uC6D0\uC5D0 \uB300\uD55C \uAE30\uBCF8\uC801\uC778 \uC218\uC5C5 \uC608\uC808\uC785\uB2C8\uB2E4.",
      points: 30
    },
    {
      id: "mq5",
      category: "\uD558\uAD50 \uC608\uC808",
      domainId: "dismissal",
      question: "\uBC29\uACFC \uD6C4 \uD558\uAD50\uD560 \uB54C \uAD50\uC2E4\uC5D0 \uB0A8\uACA8\uB450\uB294 \uB514\uBC97(\uD0DC\uBE14\uB9BF)\uC744 \uAD00\uB9AC\uD558\uB294 \uC62C\uBC14\uB978 \uBC29\uBC95\uC740?",
      options: [
        "\uB0B4\uC77C \uB610 \uC4F8 \uAC70\uB2C8\uAE4C \uB0B4 \uCC45\uC0C1 \uC704\uC5D0 \uADF8\uB0E5 \uB450\uACE0 \uAC04\uB2E4.",
        "\uBC14\uB2E5\uC5D0 \uB5A8\uC5B4\uC9C4 \uCC44\uB85C \uB450\uACE0 \uBD88\uB9CC \uB044\uACE0 \uB098\uAC04\uB2E4.",
        "\uD559\uAE09 \uCDA9\uC804\uD568\uC758 \uB0B4 \uBC88\uD638 \uC2AC\uB86F\uC5D0 \uBC14\uB974\uAC8C \uAF42\uACE0 \uCDA9\uC804 \uCF00\uC774\uBE14\uC774 \uC798 \uC5F0\uACB0\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD55C\uB2E4.",
        "\uC606 \uBC18 \uCE5C\uAD6C\uC5D0\uAC8C \uC7A5\uB09C\uC73C\uB85C \uC228\uACA8\uB450\uACE0 \uAC04\uB2E4."
      ],
      answer: 2,
      explanation: "\uB514\uBC97\uC740 \uC11C\uC6B8\uC2DC\uAD50\uC721\uCCAD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC18C\uC911\uD55C \uACF5\uACF5 \uD559\uC2B5 \uAE30\uAE30\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uB0A0 \uC218\uC5C5\uC5D0 \uCC28\uC9C8\uC774 \uC5C6\uB3C4\uB85D \uBC18\uB4DC\uC2DC \uD559\uAE09 \uCDA9\uC804\uD568 \uBCF8\uC778 \uBC88\uD638 \uC790\uB9AC\uC5D0 \uAF42\uC544\uB450\uC5B4\uC57C \uD569\uB2C8\uB2E4.",
      points: 30
    },
    {
      id: "mq6",
      category: "\uAE09\uC2DD\uC2E4 \uC608\uC808",
      domainId: "cafeteria",
      question: "\uC74C\uC2DD\uC744 \uB2E4 \uBA39\uACE0 \uC2DD\uD310\uC744 \uD1F4\uC2DD\uAD6C\uC5D0 \uBC18\uB0A9\uD560 \uB54C \uAC00\uC7A5 \uC62C\uBC14\uB978 \uC21C\uC11C\uB294?",
      options: [
        "\uAD6D\uADF8\uB987\uC5D0 \uC4F0\uB808\uAE30\uC640 \uC218\uC800\uB97C \uBAA8\uB450 \uC4F8\uC5B4 \uB123\uACE0 \uB300\uCDA9 \uB358\uC838\uB454\uB2E4.",
        "\uC794\uBC18\uC744 \uC794\uBC18\uD1B5\uC5D0 \uD138\uC5B4 \uB123\uACE0, \uC218\uC800\uC640 \uC813\uAC00\uB77D\uC744 \uBD84\uB9AC\uD558\uC5EC \uD1B5\uC5D0 \uB123\uC740 \uB4A4 \uC2DD\uD310\uC744 \uAC00\uC9C0\uB7F0\uD788 \uC313\uB294\uB2E4.",
        "\uBC30\uBD80\uB974\uB2C8 \uC2DD\uD310\uC744 \uC2DD\uD0C1 \uC704\uC5D0 \uADF8\uB300\uB85C \uB450\uACE0 \uB098\uAC04\uB2E4.",
        "\uC794\uBC18\uD1B5 \uC606 \uBC14\uB2E5\uC5D0 \uD758\uB824\uB3C4 \uBAA8\uB978 \uCC99\uD55C\uB2E4."
      ],
      answer: 1,
      explanation: "\uC2DD\uD310\uACFC \uC218\uC800\uB97C \uBD84\uB9AC\uD558\uACE0 \uC794\uBC18\uC744 \uBC14\uB974\uAC8C \uBE44\uC6B0\uB294 \uAC83\uC740 \uB4A4\uCC98\uB9AC\uD574\uC8FC\uC2DC\uB294 \uAE09\uC2DD\uC2E4 \uC2E4\uBB34\uC0AC\uB2D8\uB4E4\uC744 \uC704\uD55C \uCD5C\uC18C\uD55C\uC758 \uC874\uC911\uC774\uC790 \uC704\uC0DD \uC218\uCE59\uC785\uB2C8\uB2E4.",
      points: 30
    }
  ];

  // src/js/reading-data.js
  var MIDDLE_SCHOOL_BOOKS = [
    {
      id: "b1",
      title: "\uC544\uBAAC\uB4DC",
      author: "\uC190\uC6D0\uD3C9",
      publisher: "\uCC3D\uBE44",
      coverIcon: "\u{1F4D6}",
      category: "\uCCAD\uC18C\uB144 \uBB38\uD559",
      desc: "\uAC10\uC815\uC744 \uB290\uB07C\uC9C0 \uBABB\uD558\uB294 \uC18C\uB144 \uC724\uC7AC\uC758 \uD2B9\uBCC4\uD55C \uC131\uC7A5\uACFC \uACF5\uAC10 \uC774\uC57C\uAE30",
      quotes: [
        "\uAD6C\uD560 \uC218 \uC5C6\uB294 \uC778\uAC04\uC774\uB780 \uC5C6\uB2E4. \uAD6C\uD558\uB824\uB294 \uC190\uAE38\uC744 \uBA48\uCD94\uC9C0\uB9CC \uC54A\uB294\uB2E4\uBA74.",
        "\uB450\uB824\uC6C0\uB3C4 \uBD84\uB178\uB3C4 \uB0B4\uAC90 \uC5C6\uC5C8\uB2E4. \uD558\uC9C0\uB9CC \uB0B4\uAC8C \uC5C6\uB294 \uADF8\uAC83\uC744 \uB0A8\uB4E4\uC740 \uC0C1\uCC98\uB77C \uBD88\uB800\uB2E4.",
        "\uC138\uC0C1\uC744 \uC774\uD574\uD558\uACE0 \uC2F6\uC5C8\uB2E4. \uAC00\uC2B4\uC73C\uB85C \uC774\uD574\uD558\uC9C0 \uBABB\uD55C\uB2E4\uBA74 \uBA38\uB9AC\uB85C\uB77C\uB3C4 \uBC30\uC6B0\uACE0 \uC2F6\uC5C8\uB2E4."
      ]
    },
    {
      id: "b2",
      title: "\uC2DC\uAC04\uC744 \uD30C\uB294 \uC0C1\uC810",
      author: "\uAE40\uC120\uC601",
      publisher: "\uC790\uC74C\uACFC\uBAA8\uC74C",
      coverIcon: "\u23F3",
      category: "\uCCAD\uC18C\uB144 \uBB38\uD559",
      desc: "\uC2DC\uAC04\uC744 \uC758\uB8B0\uBC1B\uB294 \uD2B9\uBCC4\uD55C \uC778\uD130\uB137 \uCE74\uD398\uB97C \uD1B5\uD574 \uB3CC\uC544\uBCF4\uB294 \uC0B6\uACFC \uC2DC\uAC04\uC758 \uC758\uBBF8",
      quotes: [
        "\uC2DC\uAC04\uC740 \uBD99\uC7A1\uC544 \uB458 \uC218\uB3C4 \uC5C6\uACE0 \uBBF8\uB9AC \uAC00\uBD88\uD560 \uC218\uB3C4 \uC5C6\uB2E4. \uC624\uC9C1 \uC9C0\uAE08 \uC774 \uC21C\uAC04\uC5D0\uB9CC \uC874\uC7AC\uD55C\uB2E4.",
        "\uC6B0\uB9AC\uAC00 \uBCF4\uB0B4\uB294 \uC624\uB298\uC740 \uC5B4\uC81C \uC8FD\uC5B4\uAC04 \uC774\uB4E4\uC774 \uADF8\uD1A0\uB85D \uBC14\uB77C\uB358 \uB0B4\uC77C\uC774\uB2E4.",
        "\uB9C8\uC74C\uC774 \uBA38\uBB34\uB294 \uC790\uB9AC\uC5D0 \uBE44\uB85C\uC18C \uC2DC\uAC04\uB3C4 \uC628\uAE30\uB97C \uD488\uACE0 \uD750\uB978\uB2E4."
      ]
    },
    {
      id: "b3",
      title: "\uCCB4\uB9AC\uC0C8\uC6B0: \uBE44\uBC00\uAE00\uC785\uB2C8\uB2E4",
      author: "\uD669\uC601\uBBF8",
      publisher: "\uBB38\uD559\uB3D9\uB124",
      coverIcon: "\u{1F990}",
      category: "\uD559\uAD50\uC0DD\uD65C\xB7\uAD00\uACC4",
      desc: "\uCE5C\uAD6C \uAD00\uACC4\uC5D0 \uB208\uCE58 \uBCF4\uC9C0 \uC54A\uACE0 \uB2F9\uB2F9\uD558\uAC8C \uB098 \uC790\uC2E0\uC73C\uB85C \uC11C\uB294 \uC911\uD559\uAD50 \uAD50\uC2E4\uC758 \uC774\uC57C\uAE30",
      quotes: [
        "\uB098\uB97C \uC2EB\uC5B4\uD558\uB294 \uC0AC\uB78C\uC5D0\uAC8C \uC2E0\uACBD \uC4F0\uB290\uB77C, \uC815\uC791 \uB098\uB97C \uC88B\uC544\uD558\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uC18C\uD640\uD558\uC9C0 \uB9D0\uC790.",
        "\uC740\uB530\uAC00 \uB420\uAE4C \uBD10 \uB450\uB824\uC6CC \uCE5C\uAD6C\uB4E4\uC758 \uB208\uCE58\uB97C \uBCF4\uB358 \uB0A0\uB4E4\uC740 \uC774\uC81C \uB05D\uB0AC\uB2E4. \uB098\uB294 \uB098\uB300\uB85C \uBE5B\uB09C\uB2E4.",
        "\uB204\uAD70\uAC00\uC640 \uAF2D \uB2EE\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uB2E4. \uC11C\uB85C \uB2E4\uB978 \uBE5B\uAE54\uC774 \uBAA8\uC5EC \uAD50\uC2E4\uC774 \uB41C\uB2E4."
      ]
    },
    {
      id: "b4",
      title: "\uD398\uC778\uD2B8",
      author: "\uC774\uD76C\uC601",
      publisher: "\uCC3D\uBE44",
      coverIcon: "\u{1F3A8}",
      category: "\uAC00\uC871\xB7\uC131\uC7A5",
      desc: "\uAD6D\uAC00\uAC00 \uD0A4\uC6B4 \uC544\uC774\uB4E4\uC774 \uC9C1\uC811 \uBD80\uBAA8\uB97C \uBA74\uC811 \uBCF4\uACE0 \uC120\uD0DD\uD558\uB294 \uBBF8\uB798 \uC0AC\uD68C \uC774\uC57C\uAE30",
      quotes: [
        "\uC644\uBCBD\uD55C \uBD80\uBAA8\uB3C4, \uC644\uBCBD\uD55C \uC790\uB140\uB3C4 \uC5C6\uB2E4. \uC6B0\uB9AC\uB294 \uC11C\uB85C\uB97C \uB9C8\uC8FC\uD558\uBA70 \uD568\uAED8 \uBC30\uC6B0\uACE0 \uC790\uB780\uB2E4.",
        "\uB9C8\uC8FC \uC549\uC544 \uB530\uB73B\uD55C \uBC25 \uD55C \uB07C\uB97C \uB098\uB20C \uC218 \uC788\uB2E4\uBA74 \uADF8\uAC83\uC73C\uB85C \uAC00\uC871\uC758 \uC628\uB3C4\uB294 \uCDA9\uBD84\uD558\uB2E4.",
        "\uC120\uD0DD\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uC120\uD0DD \uC774\uD6C4\uC5D0 \uD568\uAED8 \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC2DC\uAC04\uC774\uB2E4."
      ]
    },
    {
      id: "b5",
      title: "\uC6D0\uB354 (Wonder)",
      author: "R.J. \uD314\uB77C\uC2DC\uC624",
      publisher: "\uCC45\uACFC\uCF69\uB098\uBB34",
      coverIcon: "\u{1F31F}",
      category: "\uACF5\uAC10\xB7\uC6B0\uC815",
      desc: "\uB0A8\uB4E4\uACFC \uB2E4\uB978 \uC678\uBAA8\uB85C \uD0DC\uC5B4\uB09C \uC5B4\uAC70\uC2A4\uD2B8\uAC00 \uC911\uD559\uAD50\uC5D0 \uC785\uD559\uD558\uC5EC \uACAA\uB294 \uB530\uB73B\uD55C \uAE30\uC801",
      quotes: [
        "\uC633\uC74C\uACFC \uCE5C\uC808\uD568 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD55C\uB2E4\uBA74, \uD56D\uC0C1 \uCE5C\uC808\uD568\uC744 \uC120\uD0DD\uD558\uB77C.",
        "\uC6B0\uB9AC\uAC00 \uC5B4\uB5A4 \uC0AC\uB78C\uC778\uC9C0\uB294 \uC6B0\uB9AC\uC758 \uD589\uB3D9\uC774 \uBCF4\uC5EC\uC900\uB2E4.",
        "\uBAA8\uB4E0 \uC0AC\uB78C\uC740 \uC77C\uC0DD\uC5D0 \uC801\uC5B4\uB3C4 \uD55C \uBC88\uC740 \uAE30\uB9BD\uBC15\uC218\uB97C \uBC1B\uC744 \uC790\uACA9\uC774 \uC788\uB2E4."
      ]
    },
    {
      id: "b6",
      title: "\uC790\uC804\uAC70 \uB3C4\uB451",
      author: "\uBC15\uC644\uC11C",
      publisher: "\uB2E4\uB9BC",
      coverIcon: "\u{1F6B2}",
      category: "\uB3C4\uB355\xB7\uC591\uC2EC",
      desc: "\uB3C4\uC2DC\uC758 \uC720\uD639 \uC18D\uC5D0\uC11C \uC790\uC2E0\uC758 \uC591\uC2EC\uACFC \uB3C4\uB355\uC131\uC744 \uC9C0\uCF1C\uB0B4\uB824\uB294 \uC18C\uB144 \uC218\uB0A8\uC774\uC758 \uC774\uC57C\uAE30",
      quotes: [
        "\uBC14\uB78C\uC774 \uBD88\uC5B4 \uB118\uC5B4\uB728\uB9B0 \uC790\uC804\uAC70\uB97C \uC138\uC6CC \uB450\uACE0 \uB3CC\uC544\uC124 \uB54C\uC758 \uBD80\uB044\uB7EC\uC6C0, \uADF8\uAC83\uC774 \uB0B4 \uC591\uC2EC\uC774\uC5C8\uB2E4.",
        "\uD3B8\uB9AC\uD568\uBCF4\uB2E4 \uC18C\uC911\uD55C \uAC83\uC740 \uB0B4 \uB9C8\uC74C\uC5D0 \uD55C \uC810 \uBD80\uB044\uB7EC\uC6C0\uC774 \uC5C6\uB294 \uB5B3\uB5B3\uD568\uC774\uB2E4."
      ]
    },
    {
      id: "b7",
      title: "\uC5B4\uB9B0 \uC655\uC790",
      author: "\uC0DD\uD14D\uC950\uD398\uB9AC",
      publisher: "\uC5F4\uB9B0\uCC45\uB4E4",
      coverIcon: "\u{1F451}",
      category: "\uC138\uACC4\uACE0\uC804",
      desc: "\uC0AC\uB9C9\uC5D0\uC11C \uB9CC\uB09C \uC5B4\uB9B0 \uC655\uC790\uB97C \uD1B5\uD574 \uBC14\uB77C\uBCF8 \uB9C8\uC74C\uC758 \uB208\uACFC \uC9C4\uC815\uD55C \uAD00\uACC4\uC758 \uC758\uBBF8",
      quotes: [
        "\uAC00\uC7A5 \uC911\uC694\uD55C \uAC83\uC740 \uB208\uC5D0 \uBCF4\uC774\uC9C0 \uC54A\uC544. \uB9C8\uC74C\uC73C\uB85C \uBCF4\uC544\uC57C\uB9CC \uBD84\uBA85\uD558\uAC8C \uBCFC \uC218 \uC788\uC5B4.",
        "\uB124 \uC7A5\uBBF8\uAC00 \uADF8\uD1A0\uB85D \uC18C\uC911\uD55C \uAC83\uC740, \uADF8 \uC7A5\uBBF8\uB97C \uC704\uD574 \uB124\uAC00 \uC3DF\uC740 \uC2DC\uAC04 \uB54C\uBB38\uC774\uC57C."
      ]
    },
    {
      id: "b8",
      title: "\uC720\uC9C4\uACFC \uC720\uC9C4",
      author: "\uC774\uAE08\uC774",
      publisher: "\uD478\uB978\uCC45\uB4E4",
      coverIcon: "\u{1F54A}\uFE0F",
      category: "\uCCAD\uC18C\uB144 \uC131\uC7A5",
      desc: "\uC774\uB984\uC740 \uAC19\uC9C0\uB9CC \uC11C\uB85C \uB2E4\uB978 \uC0C1\uCC98\uC640 \uC0B6\uC744 \uC548\uACE0 \uC0B4\uC544\uAC00\uB294 \uB450 \uC18C\uB140\uC758 \uC9C4\uC194\uD55C \uC6B0\uC815",
      quotes: [
        "\uC0C1\uCC98\uB294 \uC228\uAE38\uC218\uB85D \uACEA\uC544\uAC00\uC9C0\uB9CC, \uD587\uBCD5 \uC544\uB798 \uAEBC\uB0B4\uB193\uC73C\uBA74 \uBE44\uB85C\uC18C \uC544\uBB3C\uAE30 \uC2DC\uC791\uD55C\uB2E4.",
        "\uC9C4\uC815\uD55C \uCE5C\uAD6C\uB294 \uB0B4 \uC544\uD514\uC744 \uB3D9\uC815\uD558\uB294 \uC0AC\uB78C\uC774 \uC544\uB2C8\uB77C \uBB35\uBB35\uD788 \uACC1\uC744 \uC9C0\uCF1C\uC8FC\uB294 \uC0AC\uB78C\uC774\uB2E4."
      ]
    }
  ];
  var INITIAL_READING_LOGS = [
    {
      id: "r1",
      templateType: "quote_cards",
      // 기억하고 싶은 구절 (PDF p.1)
      studentNumber: 1,
      bookTitle: "\uC544\uBAAC\uB4DC",
      author: "\uC190\uC6D0\uD3C9",
      quote1: "\uAD6C\uD560 \uC218 \uC5C6\uB294 \uC778\uAC04\uC774\uB780 \uC5C6\uB2E4. \uAD6C\uD558\uB824\uB294 \uC190\uAE38\uC744 \uBA48\uCD94\uC9C0\uB9CC \uC54A\uB294\uB2E4\uBA74.",
      page1: "78",
      quote2: "\uC138\uC0C1\uC744 \uC774\uD574\uD558\uACE0 \uC2F6\uC5C8\uB2E4. \uAC00\uC2B4\uC73C\uB85C \uC774\uD574\uD558\uC9C0 \uBABB\uD55C\uB2E4\uBA74 \uBA38\uB9AC\uB85C\uB77C\uB3C4 \uBC30\uC6B0\uACE0 \uC2F6\uC5C8\uB2E4.",
      page2: "142",
      date: "2026-09-13",
      likes: 14
    },
    {
      id: "r2",
      templateType: "summary_reflection",
      // 독서기록장 (PDF p.7)
      studentNumber: 2,
      bookTitle: "\uC2DC\uAC04\uC744 \uD30C\uB294 \uC0C1\uC810",
      author: "\uAE40\uC120\uC601",
      summary: "\uC8FC\uC778\uACF5 \uC628\uC870\uAC00 \uC778\uD130\uB137 \uCE74\uD398\uC5D0\uC11C \uC2DC\uAC04\uC744 \uC758\uB8B0\uBC1B\uC544 \uC218\uD589\uD558\uBA74\uC11C \uB2E4\uC591\uD55C \uC0AC\uB78C\uB4E4\uC758 \uC0AC\uC5F0\uACFC \uC2DC\uAC04\uC758 \uAC00\uCE58\uB97C \uAE68\uB2EC\uC544\uAC00\uB294 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4.",
      reflectionTags: ["\uB290\uB080\uC810", "\uB2E4\uC9D0"],
      reflection: "\uC9EC\uB098\uB294 5\uBD84 \uB3C5\uC11C \uC2DC\uAC04\uC744 \uB2E8\uC21C\uD788 \uD758\uB824\uBCF4\uB0B4\uC9C0 \uC54A\uACE0 \uB098\uB97C \uCC44\uC6B0\uB294 \uC2DC\uAC04\uC73C\uB85C \uCC44\uC6CC\uC57C\uACA0\uB2E4\uACE0 \uAD73\uAC8C \uB2E4\uC9D0\uD588\uC2B5\uB2C8\uB2E4.",
      memorablePart: "\uC2DC\uAC04\uC740 \uBD99\uC7A1\uC544 \uB458 \uC218\uB3C4 \uC5C6\uACE0 \uAC00\uBD88\uD560 \uC218\uB3C4 \uC5C6\uB2E4. \uC624\uC9C1 \uC9C0\uAE08\uBFD0\uC774\uB2E4.",
      date: "2026-09-13",
      likes: 19
    },
    {
      id: "r3",
      templateType: "make_quiz",
      // 퀴즈 만들기 (PDF p.3)
      studentNumber: 4,
      bookTitle: "\uCCB4\uB9AC\uC0C8\uC6B0: \uBE44\uBC00\uAE00\uC785\uB2C8\uB2E4",
      author: "\uD669\uC601\uBBF8",
      q1: "\uC740\uB530\uAC00 \uB420\uAE4C \uBD10 \uB450\uB824\uC6CC \uCE5C\uAD6C\uB4E4 \uB208\uCE58\uB97C \uBCF4\uB358 \uB2E4\uD604\uC774\uAC00 \uC790\uC2E0\uC758 \uBE14\uB85C\uADF8\uC5D0 \uC4F0\uB294 \uBE44\uBC00 \uAE00\uC758 \uC774\uB984\uC740?",
      p1: "45",
      a1: "\uCCB4\uB9AC\uC0C8\uC6B0",
      q2: "\uB2E4\uD604\uC774\uAC00 \uAE68\uB2EC\uC740 \uC9C4\uC815\uD55C \uCE5C\uAD6C \uAD00\uACC4\uC758 \uBE44\uACB0\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
      p2: "120",
      a2: "\uB098\uB97C \uC2EB\uC5B4\uD558\uB294 \uC0AC\uB78C\uC5D0\uAC8C \uC2E0\uACBD \uC4F0\uAE30\uBCF4\uB2E4 \uB098\uB97C \uC544\uAEF4\uC8FC\uB294 \uC0AC\uB78C\uC5D0\uAC8C \uC9C4\uC2EC\uC744 \uB2E4\uD558\uB294 \uAC83",
      date: "2026-09-13",
      likes: 16
    }
  ];

  // src/js/state.js
  var STORAGE_KEY = "pyeonhakwi_ms_state_v4";
  var INITIAL_STUDENTS_28 = [
    {
      number: 1,
      grade: 2,
      classNum: 3,
      realName: "\uAE40\uBBFC\uC900",
      nickname: "\uBCC4\uBE5B\uB2EC\uBE5B",
      mannersScore: 480,
      typingScore: 540,
      readingScore: 320,
      totalPoints: 1340,
      typingBestCPM: 365,
      typingAcc: 98,
      streak: 8,
      checked: true,
      quizDone: true,
      comment: "\uC544\uCE68 \uC778\uC0AC\uB97C \uBA3C\uC800 \uBC1D\uAC8C \uAC74\uB124\uB2C8 \uD558\uB8E8\uAC00 \uC0C1\uCF8C\uD569\uB2C8\uB2E4!",
      hasSticker: true
    },
    {
      number: 2,
      grade: 2,
      classNum: 3,
      realName: "\uC774\uC11C\uC5F0",
      nickname: "\uCC45\uC77D\uB294\uC0AC\uC790",
      mannersScore: 520,
      typingScore: 610,
      readingScore: 490,
      totalPoints: 1620,
      typingBestCPM: 425,
      typingAcc: 99,
      streak: 11,
      checked: true,
      quizDone: true,
      comment: "\u300A\uC2DC\uAC04\uC744 \uD30C\uB294 \uC0C1\uC810\u300B\uC744 \uC77D\uACE0 \uB9E4\uC77C 5\uBD84\uC758 \uC18C\uC911\uD568\uC744 \uC2E4\uAC10\uD588\uC5B4\uC694.",
      hasSticker: true
    },
    {
      number: 3,
      grade: 2,
      classNum: 3,
      realName: "\uBC15\uB3C4\uC724",
      nickname: "\uC0C8\uBCBD\uAD6C\uB984",
      mannersScore: 390,
      typingScore: 410,
      readingScore: 280,
      totalPoints: 1080,
      typingBestCPM: 295,
      typingAcc: 94,
      streak: 5,
      checked: true,
      quizDone: false,
      comment: "\uCC45\uC0C1 \uC704 \uAD50\uACFC\uC11C \uC815\uB3C8\uACFC \uBCF5\uB3C4 \uC6B0\uCE21\uD1B5\uD589\uC744 \uC9C0\uD0A4\uACE0 \uC788\uC5B4\uC694.",
      hasSticker: false
    },
    {
      number: 4,
      grade: 2,
      classNum: 3,
      realName: "\uC815\uC608\uC740",
      nickname: "\uAFC8\uAFB8\uB294\uACE0\uB798",
      mannersScore: 510,
      typingScore: 480,
      readingScore: 460,
      totalPoints: 1450,
      typingBestCPM: 380,
      typingAcc: 97,
      streak: 9,
      checked: true,
      quizDone: true,
      comment: "\uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uACE0\uC6B4 \uB9D0 \uC4F0\uAE30\uB97C \uC628\xB7\uC624\uD504\uB77C\uC778\uC5D0\uC11C \uBAA8\uB450 \uC2E4\uCC9C \uC911\uC785\uB2C8\uB2E4.",
      hasSticker: true
    },
    {
      number: 5,
      grade: 2,
      classNum: 3,
      realName: "\uCD5C\uC2DC\uC6B0",
      nickname: "\uD478\uB978\uD558\uB298",
      mannersScore: 310,
      typingScore: 330,
      readingScore: 210,
      totalPoints: 850,
      typingBestCPM: 240,
      typingAcc: 91,
      streak: 3,
      checked: false,
      quizDone: false,
      comment: "\uD55C\uCEF4 \uC790\uB9AC\uC5F0\uC2B5\uC73C\uB85C \uAE30\uBCF8\uAE30\uBD80\uD130 \uD0C4\uD0C4\uD788 \uCC44\uC6B0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 6,
      grade: 2,
      classNum: 3,
      realName: "\uAC15\uC9C0\uC544",
      nickname: "\uBC14\uB78C\uC18C\uB9AC",
      mannersScore: 560,
      typingScore: 640,
      readingScore: 520,
      totalPoints: 1720,
      typingBestCPM: 460,
      typingAcc: 100,
      streak: 14,
      checked: true,
      quizDone: true,
      comment: "\u300A\uC6D0\uB354\u300B\uC758 \uCE5C\uC808 \uBA85\uC5B8\uCC98\uB7FC \uCE5C\uAD6C\uC758 \uC2E4\uC218\uB97C \uB530\uB73B\uD558\uAC8C \uC548\uC544\uC904\uAC8C\uC694.",
      hasSticker: true
    },
    {
      number: 7,
      grade: 2,
      classNum: 3,
      realName: "\uC724\uD558\uC900",
      nickname: "\uB2EC\uCF64\uCD08\uCF54",
      mannersScore: 420,
      typingScore: 390,
      readingScore: 310,
      totalPoints: 1120,
      typingBestCPM: 315,
      typingAcc: 95,
      streak: 6,
      checked: true,
      quizDone: false,
      comment: "\uAE09\uC2DD\uC2E4\uC5D0\uC11C \uC0C8\uCE58\uAE30 \uC548 \uD558\uACE0 \uC2E4\uBB34\uC0AC\uB2D8\uAED8 \uAC10\uC0AC \uC778\uC0AC\uD558\uAE30 \uC131\uACF5!",
      hasSticker: false
    },
    {
      number: 8,
      grade: 2,
      classNum: 3,
      realName: "\uD55C\uC18C\uC728",
      nickname: "\uC740\uD558\uC218\uBCC4",
      mannersScore: 460,
      typingScore: 490,
      readingScore: 390,
      totalPoints: 1340,
      typingBestCPM: 350,
      typingAcc: 96,
      streak: 7,
      checked: true,
      quizDone: true,
      comment: "\uC544\uCE68 \uB3C5\uC11C \uD6C4 \uC9E7\uC740 \uAE00 \uD0C0\uC790 \uC5F0\uC2B5\uC744 \uD558\uB2C8 \uC9D1\uC911\uB825\uC774 \uD6E8\uC52C \uB192\uC544\uC838\uC694.",
      hasSticker: false
    },
    {
      number: 9,
      grade: 2,
      classNum: 3,
      realName: "\uC1A1\uC9C0\uD638",
      nickname: "\uB0A0\uC544\uB77C\uC6B0\uC8FC",
      mannersScore: 280,
      typingScore: 290,
      readingScore: 180,
      totalPoints: 750,
      typingBestCPM: 210,
      typingAcc: 89,
      streak: 2,
      checked: false,
      quizDone: false,
      comment: "\uB3C5\uC218\uB9AC \uD0C0\uBC95 \uBC97\uC5B4\uB098\uAE30 1\uB2E8\uACC4 \uAE30\uBCF8\uC790\uB9AC \uB9C8\uC2A4\uD130 \uB3C4\uC804!",
      hasSticker: false
    },
    {
      number: 10,
      grade: 2,
      classNum: 3,
      realName: "\uBC30\uCC44\uC6D0",
      nickname: "\uCD08\uB85D\uD480\uC78E",
      mannersScore: 490,
      typingScore: 520,
      readingScore: 410,
      totalPoints: 1420,
      typingBestCPM: 390,
      typingAcc: 98,
      streak: 8,
      checked: true,
      quizDone: true,
      comment: "\uC120\uC0DD\uB2D8 \uC124\uBA85\uD558\uC2E4 \uB54C \uB514\uBC97 \uD654\uBA74 \uB36E\uAE30 \uADDC\uCE59\uC744 \uD655\uC2E4\uD558\uAC8C \uC9C0\uD0B5\uB2C8\uB2E4.",
      hasSticker: true
    },
    {
      number: 11,
      grade: 2,
      classNum: 3,
      realName: "\uC624\uC740\uC6B0",
      nickname: "\uBBF8\uC18C\uCC9C\uC0AC",
      mannersScore: 440,
      typingScore: 460,
      readingScore: 350,
      totalPoints: 1250,
      typingBestCPM: 330,
      typingAcc: 95,
      streak: 6,
      checked: true,
      quizDone: true,
      comment: "\uB4F1\uAD63\uAE38 \uC2A4\uB9C8\uD2B8\uD3F0 \uB300\uC2E0 \uC8FC\uBCC0 \uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uBC1D\uC740 \uC544\uCE68 \uC778\uC0AC\uB97C \uAC74\uB138\uC5B4\uC694.",
      hasSticker: false
    },
    {
      number: 12,
      grade: 2,
      classNum: 3,
      realName: "\uC784\uC218\uC544",
      nickname: "\uC6A9\uAC10\uD55C\uD638\uB791\uC774",
      mannersScore: 380,
      typingScore: 370,
      readingScore: 290,
      totalPoints: 1040,
      typingBestCPM: 285,
      typingAcc: 93,
      streak: 4,
      checked: true,
      quizDone: false,
      comment: "\u300A\uC544\uBAAC\uB4DC\u300B\uB97C \uC77D\uACE0 \uC9C4\uC815\uD55C \uACF5\uAC10\uC758 \uC758\uBBF8\uB97C \uBC30\uC6B0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 13,
      grade: 2,
      classNum: 3,
      realName: "\uAD8C\uD604\uC6B0",
      nickname: "\uD587\uC0B4\uAC00\uB4DD",
      mannersScore: 320,
      typingScore: 310,
      readingScore: 220,
      totalPoints: 850,
      typingBestCPM: 250,
      typingAcc: 90,
      streak: 3,
      checked: false,
      quizDone: false,
      comment: "\uB0B4\uC77C\uBD80\uD130\uB294 10\uBD84 \uC77C\uCC0D \uB4F1\uAD50\uD558\uC5EC \uC544\uCE68 \uB3C5\uC11C\uC5D0 \uBE60\uC838\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 14,
      grade: 2,
      classNum: 3,
      realName: "\uC2E0\uC720\uB098",
      nickname: "\uC9C0\uD61C\uC62C\uBE7C\uBBF8",
      mannersScore: 530,
      typingScore: 560,
      readingScore: 480,
      totalPoints: 1570,
      typingBestCPM: 410,
      typingAcc: 98,
      streak: 10,
      checked: true,
      quizDone: true,
      comment: "\uCE5C\uAD6C \uCE6D\uCC2C \uD55C\uB9C8\uB514\uC640 \uB514\uBC97 \uC548\uC804 \uCDA9\uC804\uC73C\uB85C \uD558\uB8E8\uB97C \uBCF4\uB78C\uCC28\uAC8C \uB9C8\uBB34\uB9AC\uD569\uB2C8\uB2E4.",
      hasSticker: true
    },
    {
      number: 15,
      grade: 2,
      classNum: 3,
      realName: "\uC720\uC7AC\uC6D0",
      nickname: "\uBB34\uC9C0\uAC1C\uBE5B",
      mannersScore: 510,
      typingScore: 590,
      readingScore: 440,
      totalPoints: 1540,
      typingBestCPM: 435,
      typingAcc: 99,
      streak: 11,
      checked: true,
      quizDone: true,
      comment: "\uC601\uBB38 \uD0C0\uC790\uC640 \uD55C\uAE00 \uD0C0\uC790 \uBAA8\uB450 400\uD0C0 \uB3CC\uD30C \uBAA9\uD45C!",
      hasSticker: true
    },
    {
      number: 16,
      grade: 2,
      classNum: 3,
      realName: "\uC870\uD558\uC740",
      nickname: "\uB9D1\uC740\uC0D8\uBB3C",
      mannersScore: 470,
      typingScore: 450,
      readingScore: 370,
      totalPoints: 1290,
      typingBestCPM: 340,
      typingAcc: 96,
      streak: 7,
      checked: true,
      quizDone: true,
      comment: "\uC774\uB3D9 \uC218\uC5C5 \uC2DC \uB2E4\uB978 \uBC18 \uAD50\uC2E4 \uBCF5\uB3C4\uC5D0\uC11C \uC815\uC219\uD558\uAC8C \uAC77\uAE30 \uC2E4\uCC9C \uC911!",
      hasSticker: false
    },
    {
      number: 17,
      grade: 2,
      classNum: 3,
      realName: "\uC11C\uC9C4\uC6B0",
      nickname: "\uBD04\uB0A0\uC758\uD587\uC0B4",
      mannersScore: 360,
      typingScore: 350,
      readingScore: 270,
      totalPoints: 980,
      typingBestCPM: 275,
      typingAcc: 92,
      streak: 4,
      checked: true,
      quizDone: false,
      comment: "\uC2DD\uD310 \uBC18\uB0A9\uD560 \uB54C \uC218\uC800 \uBD84\uB9AC\uC640 \uC794\uBC18 \uCC98\uB9AC\uB97C \uAE68\uB057\uC774 \uD588\uC2B5\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 18,
      grade: 2,
      classNum: 3,
      realName: "\uBB38\uCC44\uC740",
      nickname: "\uD478\uB978\uBC14\uB2E4",
      mannersScore: 450,
      typingScore: 480,
      readingScore: 400,
      totalPoints: 1330,
      typingBestCPM: 360,
      typingAcc: 97,
      streak: 8,
      checked: true,
      quizDone: true,
      comment: "\u300A\uCCB4\uB9AC\uC0C8\uC6B0\u300B\uB97C \uC77D\uACE0 \uB0B4 \uC18C\uC2E0\uC744 \uB2E4\uC815\uD558\uAC8C \uB9D0\uD558\uB294 \uBC95\uC744 \uBC30\uC6E0\uC5B4\uC694.",
      hasSticker: false
    },
    {
      number: 19,
      grade: 2,
      classNum: 3,
      realName: "\uD669\uB3C4\uD604",
      nickname: "\uC740\uBE5B\uB0A0\uAC1C",
      mannersScore: 290,
      typingScore: 320,
      readingScore: 190,
      totalPoints: 800,
      typingBestCPM: 230,
      typingAcc: 89,
      streak: 2,
      checked: false,
      quizDone: false,
      comment: "\uD0C0\uC790 \uC18D\uB3C4\uB97C \uC870\uAE08\uC529 \uC62C\uB9AC\uB294 \uC131\uCDE8\uAC10\uC774 \uC3E0\uC3E0\uD569\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 20,
      grade: 2,
      classNum: 3,
      realName: "\uC548\uC11C\uC9C4",
      nickname: "\uC232\uC18D\uC694\uC815",
      mannersScore: 490,
      typingScore: 510,
      readingScore: 430,
      totalPoints: 1430,
      typingBestCPM: 375,
      typingAcc: 97,
      streak: 9,
      checked: true,
      quizDone: true,
      comment: "\uBC30\uC6C0\uD130 \uC9C0\uD0B4\uC774 \uC120\uC0DD\uB2D8\uAED8 \uB4DC\uB9B0 \uC544\uCE68 \uC778\uC0AC\uC5D0 \uD558\uB8E8\uAC00 \uD658\uD574\uC84C\uC2B5\uB2C8\uB2E4.",
      hasSticker: true
    },
    {
      number: 21,
      grade: 2,
      classNum: 3,
      realName: "\uC7A5\uBBFC\uC11C",
      nickname: "\uC740\uBE5B\uBC14\uB78C",
      mannersScore: 430,
      typingScore: 470,
      readingScore: 360,
      totalPoints: 1260,
      typingBestCPM: 345,
      typingAcc: 96,
      streak: 6,
      checked: true,
      quizDone: true,
      comment: "\uCE5C\uAD6C\uB4E4\uACFC \uC11C\uB85C \uC874\uC911\uD558\uBA70 \uD558\uB8E8\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 22,
      grade: 2,
      classNum: 3,
      realName: "\uC1A1\uD0DC\uC591",
      nickname: "\uD574\uC624\uB984",
      mannersScore: 370,
      typingScore: 420,
      readingScore: 290,
      totalPoints: 1080,
      typingBestCPM: 290,
      typingAcc: 93,
      streak: 5,
      checked: true,
      quizDone: false,
      comment: "\uC544\uCE68 \uB3C5\uC11C\uB85C \uB9C8\uC74C\uC744 \uAC00\uB2E4\uB4EC\uACE0 \uC218\uC5C5\uC5D0 \uC9D1\uC911\uD574\uC694.",
      hasSticker: false
    },
    {
      number: 23,
      grade: 2,
      classNum: 3,
      realName: "\uC804\uC9C0\uC6B0",
      nickname: "\uD478\uB978\uC232",
      mannersScore: 500,
      typingScore: 530,
      readingScore: 450,
      totalPoints: 1480,
      typingBestCPM: 400,
      typingAcc: 98,
      streak: 9,
      checked: true,
      quizDone: true,
      comment: "\uB514\uBC97 \uC548\uC804 \uC218\uCE59\uC744 \uC798 \uC9C0\uCF1C \uBAA8\uBC94\uC774 \uB418\uACA0\uC2B5\uB2C8\uB2E4.",
      hasSticker: true
    },
    {
      number: 24,
      grade: 2,
      classNum: 3,
      realName: "\uD669\uBCF4\uBBFC",
      nickname: "\uC0C8\uC194",
      mannersScore: 340,
      typingScore: 360,
      readingScore: 240,
      totalPoints: 940,
      typingBestCPM: 260,
      typingAcc: 91,
      streak: 3,
      checked: true,
      quizDone: false,
      comment: "\uC790\uB9AC\uC5F0\uC2B5\uBD80\uD130 \uCC28\uADFC\uCC28\uADFC \uD0C0\uC218\uB97C \uB298\uB824\uAC00\uACE0 \uC788\uC5B4\uC694.",
      hasSticker: false
    },
    {
      number: 25,
      grade: 2,
      classNum: 3,
      realName: "\uACE0\uB3C4\uD604",
      nickname: "\uC0DB\uBCC4",
      mannersScore: 460,
      typingScore: 490,
      readingScore: 380,
      totalPoints: 1330,
      typingBestCPM: 355,
      typingAcc: 96,
      streak: 7,
      checked: true,
      quizDone: true,
      comment: "\uAE09\uC2DD\uC2E4 \uC9C8\uC11C\uC640 \uC794\uBC18 \uC904\uC774\uAE30\uB97C \uC55E\uC7A5\uC11C\uC11C \uC2E4\uCC9C\uD569\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 26,
      grade: 2,
      classNum: 3,
      realName: "\uB0A8\uAD81\uC740",
      nickname: "\uB2EC\uBE5B\uC18C\uB098\uD0C0",
      mannersScore: 520,
      typingScore: 580,
      readingScore: 470,
      totalPoints: 1570,
      typingBestCPM: 415,
      typingAcc: 99,
      streak: 11,
      checked: true,
      quizDone: true,
      comment: "\u300A\uD398\uC778\uD2B8\u300B\uB97C \uC77D\uACE0 \uC9C4\uC815\uD55C \uAC00\uC871\uACFC \uC131\uC7A5\uC758 \uC758\uBBF8\uB97C \uAE68\uB2EC\uC558\uC5B4\uC694.",
      hasSticker: true
    },
    {
      number: 27,
      grade: 2,
      classNum: 3,
      realName: "\uC870\uC2DC\uC724",
      nickname: "\uBB3C\uBCF4\uB77C",
      mannersScore: 390,
      typingScore: 380,
      readingScore: 300,
      totalPoints: 1070,
      typingBestCPM: 280,
      typingAcc: 92,
      streak: 4,
      checked: true,
      quizDone: false,
      comment: "\uBCF5\uB3C4\uC5D0\uC11C \uB6F0\uC9C0 \uC54A\uACE0 \uC6B0\uCE21\uBCF4\uD589\uC744 \uCCA0\uC800\uD788 \uC9C0\uD0B5\uB2C8\uB2E4.",
      hasSticker: false
    },
    {
      number: 28,
      grade: 2,
      classNum: 3,
      realName: "\uC720\uC11C\uC9C4",
      nickname: "\uCD08\uB85D\uBCC4",
      mannersScore: 480,
      typingScore: 510,
      readingScore: 410,
      totalPoints: 1400,
      typingBestCPM: 370,
      typingAcc: 97,
      streak: 8,
      checked: true,
      quizDone: true,
      comment: "\uC544\uCE68 \uC778\uC0AC\uB97C \uBC1D\uAC8C \uB098\uB204\uB2C8 \uD558\uB8E8\uC758 \uC2DC\uC791\uC774 \uD65C\uAE30\uCC28\uC694!",
      hasSticker: true
    }
  ];
  INITIAL_STUDENTS_28.forEach((s, idx) => {
    if (!s.id) s.id = `s_2_3_${s.number || idx + 1}`;
  });
  function generateExpandedStudents() {
    const gradeStudents = [];
    const schoolStudents = [];
    for (let g = 1; g <= 3; g++) {
      for (let c = 1; c <= 7; c++) {
        for (let n = 1; n <= 28; n++) {
          const isOurClass = g === 2 && c === 3;
          if (isOurClass) {
            const student = INITIAL_STUDENTS_28[n - 1];
            if (g === 2) gradeStudents.push(student);
            schoolStudents.push(student);
          } else {
            const factor = 0.72 + (Math.sin(g * 17 + c * 9 + n) + 1) * 0.28;
            const st = {
              id: `s_${g}_${c}_${n}`,
              number: n,
              grade: g,
              classNum: c,
              realName: `\uD559\uC0DD${g}-${c}-${n}`,
              nickname: `${g}\uD559\uB144${c}\uBC18_${n}\uBC88\uB7EC\uB108`,
              mannersScore: Math.round(410 * factor),
              typingScore: Math.round(460 * factor),
              readingScore: Math.round(330 * factor),
              totalPoints: Math.round(1200 * factor),
              typingBestCPM: Math.round(315 * factor),
              typingAcc: 94,
              streak: Math.max(1, Math.round(6 * factor)),
              checked: n % 4 !== 0,
              quizDone: n % 3 !== 0,
              comment: `${g}\uD559\uB144 ${c}\uBC18 \uC544\uCE68 \uB8E8\uD2F4\uC5D0 \uC131\uC2E4\uD788 \uCC38\uC5EC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`
            };
            if (g === 2) gradeStudents.push(st);
            schoolStudents.push(st);
          }
        }
      }
    }
    return { gradeStudents, schoolStudents };
  }
  var { gradeStudents: GRADE_STUDENTS_ALL, schoolStudents: SCHOOL_STUDENTS_ALL } = generateExpandedStudents();
  var BADGES = [
    { id: "first_step", name: "\uCCAB \uBC1C\uC790\uAD6D", desc: "\uBC14\uB9845\uBD84 \uCCAB \uD65C\uB3D9 \uC644\uB8CC", icon: "\u{1F331}", req: (s) => s.totalPoints >= 20 },
    { id: "streak_3", name: "3\uC77C\uC758 \uACB0\uC2EC", desc: "3\uC77C \uC5F0\uC18D \uC544\uCE68 \uB8E8\uD2F4 \uB2EC\uC131", icon: "\u{1F525}", req: (s) => s.streak >= 3 },
    { id: "streak_7", name: "\uC544\uCE68\uC758 \uC9C0\uBC30\uC790", desc: "7\uC77C \uC5F0\uC18D \uC544\uCE68 \uB8E8\uD2F4 \uB2EC\uC131", icon: "\u{1F451}", req: (s) => s.streak >= 7 },
    { id: "typer_250", name: "\uD0C0\uC790 \uB8E8\uD0A4", desc: "\uD0C0\uC790 \uC5F0\uC2B5 250\uD0C0 \uB2EC\uC131", icon: "\u2328\uFE0F", req: (s) => s.typingBestCPM >= 250 },
    { id: "typer_400", name: "\uD0C0\uC790 \uB9C8\uC2A4\uD130", desc: "\uD0C0\uC790 \uC5F0\uC2B5 400\uD0C0 \uB2EC\uC131", icon: "\u26A1", req: (s) => s.typingBestCPM >= 400 },
    { id: "accuracy_98", name: "\uBA85\uC0AC\uC218", desc: "\uD0C0\uC790 \uC815\uD655\uB3C4 98% \uC774\uC0C1 \uB2EC\uC131", icon: "\u{1F3AF}", req: (s) => s.typingAcc >= 98 },
    { id: "reading_worm", name: "\uC544\uCE68 \uB2E4\uB3C5\uC655", desc: "\uB3C5\uC11C\uAE30\uB85D 300\uC810 \uC774\uC0C1 \uB2EC\uC131", icon: "\u{1F4DA}", req: (s) => s.readingScore >= 300 },
    { id: "manners_master", name: "\uC608\uC808 \uBC15\uC0AC", desc: "\uC608\uC808 \uC2E4\uCC9C 400\uC810 \uC774\uC0C1 \uB2EC\uC131", icon: "\u{1F393}", req: (s) => s.mannersScore >= 400 }
  ];
  var AppState = class {
    constructor() {
      this.listeners = [];
      this.state = this.loadState();
    }
    getTodayString() {
      const d = /* @__PURE__ */ new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
    loadState() {
      const today = this.getTodayString();
      try {
        if (typeof localStorage !== "undefined") {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.lastActiveDate !== today) {
              parsed.lastActiveDate = today;
              parsed.todaySubChecked = {};
              parsed.todayQuizDone = false;
            }
            if (!parsed.recommendedBooks || parsed.recommendedBooks.length === 0) {
              parsed.recommendedBooks = [...MIDDLE_SCHOOL_BOOKS];
            }
            if (!parsed.selectedClassKey) {
              parsed.selectedClassKey = "2-3";
            }
            if (!parsed.auth || !parsed.auth.uid) {
              parsed.auth = { isLoggedIn: false, provider: "google", uid: null, email: "", accountRole: "student", roleSource: "default" };
            }
            if (parsed.auth.accountRole !== "teacher") {
              parsed.userProfile.role = "student";
            }
            return parsed;
          }
        }
      } catch (e) {
        console.warn("Failed to load state from localStorage", e);
      }
      return {
        auth: {
          isLoggedIn: false,
          provider: "google",
          uid: null,
          email: "",
          accountRole: "student",
          roleSource: "default"
        },
        userProfile: {
          role: "student",
          // 'student' | 'teacher'
          school: "\uACBD\uD76C\uC911\uD559\uAD50",
          grade: 2,
          classNum: 3,
          number: 1,
          realName: "\uAE40\uBBFC\uC900",
          nickname: "\uBCC4\uBE5B\uB2EC\uBE5B"
        },
        selectedClassKey: "2-3",
        lastActiveDate: today,
        mannersScore: 480,
        typingScore: 540,
        readingScore: 320,
        totalPoints: 1340,
        streak: 8,
        typingBestCPM: 365,
        typingAcc: 98,
        todaySubChecked: {
          "arrival_1": true,
          "arrival_2": true,
          "hallway_1": true
        },
        todayQuizDone: true,
        myComment: "\uC544\uCE68 \uC778\uC0AC\uB97C \uBA3C\uC800 \uBC1D\uAC8C \uAC74\uB124\uB2C8 \uD558\uB8E8\uAC00 \uC0C1\uCF8C\uD569\uB2C8\uB2E4!",
        students: INITIAL_STUDENTS_28,
        gradeStudents: GRADE_STUDENTS_ALL,
        schoolStudents: SCHOOL_STUDENTS_ALL,
        teacherProposals: INITIAL_TEACHER_PROPOSALS,
        recommendedBooks: [...MIDDLE_SCHOOL_BOOKS],
        classGoalPoints: 35e3,
        myReadingLogs: []
      };
    }
    save() {
      try {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        }
      } catch (e) {
        console.error("Failed to save state", e);
      }
      this.notify();
    }
    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
    notify() {
      this.listeners.forEach((fn) => fn(this.state));
    }
    // 구글 로그인 또는 테스트 로그인 세션이 있는지
    isLoggedIn() {
      const { auth: auth2 } = this.state;
      return !!(auth2 && auth2.isLoggedIn && auth2.uid);
    }
    isTestAccount() {
      return this.isLoggedIn() && !!this.state.auth.isTestAccount;
    }
    // 로그인된 계정이 교사 권한(자동 구분 또는 코드 승격)을 가졌는지
    isVerifiedTeacher() {
      return this.isLoggedIn() && this.state.auth.accountRole === "teacher";
    }
    // 개발용 테스트 로그인 (Firebase 없이 학생/교사 상황 체험)
    loginAsTestAccount(role) {
      const isTeacher = role === "teacher";
      this.state.auth = {
        isLoggedIn: true,
        provider: "test",
        isTestAccount: true,
        uid: isTeacher ? "test-teacher" : "test-student",
        email: isTeacher ? "test.teacher@kyunghee.sen.ms.kr" : "262301@kyunghee.sen.ms.kr",
        accountRole: isTeacher ? "teacher" : "student",
        roleSource: "test"
      };
      this.state.userProfile = {
        ...this.state.userProfile,
        role: isTeacher ? "teacher" : "student",
        grade: 2,
        classNum: 3,
        number: 1,
        realName: isTeacher ? "\uD14C\uC2A4\uD2B8 \uC120\uC0DD\uB2D8" : "\uAE40\uBBFC\uC900",
        nickname: isTeacher ? "\uB2F4\uC784\uC120\uC0DD\uB2D8" : "\uBCC4\uBE5B\uB2EC\uBE5B"
      };
      if (!isTeacher) this.syncCurrentStudentToClassList();
      this.save();
    }
    // 화면 모드 전환 (교사 화면은 인증된 교사만 가능)
    setRole(role) {
      if (role === "teacher" && !this.isVerifiedTeacher()) return false;
      this.state.userProfile.role = role;
      this.save();
      return true;
    }
    // 로그인 세션의 계정 정보와 권한을 반영
    applyAccount({ uid, email, accountRole, roleSource }) {
      this.state.auth = {
        ...this.state.auth,
        isLoggedIn: true,
        provider: this.state.auth && this.state.auth.isTestAccount ? "test" : "google",
        uid,
        email,
        accountRole,
        roleSource
      };
      this.state.userProfile.role = accountRole;
      this.save();
    }
    clearAccount() {
      this.state.auth = { isLoggedIn: false, provider: "google", uid: null, email: "", accountRole: "student", roleSource: "default" };
      this.state.userProfile.role = "student";
      this.save();
    }
    updateProfile(profileData) {
      this.state.userProfile = {
        ...this.state.userProfile,
        ...profileData
      };
      this.syncCurrentStudentToClassList();
      this.save();
    }
    // Formatting student name according to role visibility rule
    formatStudentName(student) {
      const isTeacher = this.state.userProfile.role === "teacher";
      if (isTeacher) {
        return `${student.realName} (${student.nickname})`;
      }
      return student.nickname;
    }
    // Toggle individual sub-rule (each awards +5P)
    toggleSubRule(ruleId, points = 5) {
      const isChecked = !!this.state.todaySubChecked[ruleId];
      if (!isChecked) {
        this.state.todaySubChecked[ruleId] = true;
        this.addMannersScore(points);
      } else {
        delete this.state.todaySubChecked[ruleId];
        this.state.mannersScore = Math.max(0, this.state.mannersScore - points);
        this.state.totalPoints = Math.max(0, this.state.totalPoints - points);
        this.syncCurrentStudentToClassList();
        this.save();
      }
      return !isChecked;
    }
    // Teacher Proposal System with 70% Sympathy Approval
    proposeEtiquette({ domainId, rule, desc, proposer }) {
      const newProp = {
        id: `prop_${Date.now()}`,
        proposer: proposer || this.state.userProfile.realName + " \uC120\uC0DD\uB2D8",
        date: this.getTodayString(),
        domainId,
        rule,
        desc,
        votes: ["t_creator"],
        totalTeachers: 10,
        status: "pending"
      };
      this.state.teacherProposals.unshift(newProp);
      this.save();
      return newProp;
    }
    voteProposalSympathy(proposalId, teacherId = "t_curr") {
      return this.voteSympathy(proposalId, teacherId);
    }
    voteSympathy(proposalId, teacherId = "t_curr") {
      const prop = this.state.teacherProposals.find((p) => p.id === proposalId);
      if (!prop) return false;
      if (!prop.votes.includes(teacherId)) {
        prop.votes.push(teacherId);
      }
      const rate = prop.votes.length / prop.totalTeachers;
      if (rate >= 0.7 && prop.status !== "approved") {
        prop.status = "approved";
        prop.approvedDate = this.getTodayString();
      }
      this.save();
      return {
        votesCount: prop.votes.length,
        totalTeachers: prop.totalTeachers,
        rate: Math.round(rate * 100),
        isApproved: prop.status === "approved"
      };
    }
    // Teacher Recommended Books System
    addRecommendedBook({ title, author, publisher = "", coverIcon = "\u{1F4D8}", category = "\uC120\uC0DD\uB2D8 \uCD94\uCC9C", desc = "", quotes = [], addedBy = "" }) {
      const newBook = {
        id: `b_teacher_${Date.now()}`,
        title: title.trim(),
        author: author.trim(),
        publisher: publisher.trim() || "\uCD94\uCC9C\uB3C4\uC11C",
        coverIcon: coverIcon || "\u{1F31F}",
        category: category || "\uAD50\uC0AC \uCD94\uCC9C\uB3C4\uC11C",
        desc: desc.trim() || "\uC120\uC0DD\uB2D8\uAED8\uC11C \uD559\uC0DD\uB4E4\uC758 \uC778\uC131\uACFC \uC131\uC7A5\uC744 \uC704\uD574 \uCD94\uCC9C\uD558\uC2E0 \uB3C4\uC11C\uC785\uB2C8\uB2E4.",
        quotes: quotes.length > 0 ? quotes : ["\uB9C8\uC74C\uC5D0 \uB0A8\uB294 \uC778\uC0C1 \uAE4A\uC740 \uAD6C\uC808\uC744 \uCC3E\uC544 \uAE30\uB85D\uD574 \uBCF4\uC138\uC694."],
        isTeacherAdded: true,
        addedBy: addedBy || `${this.state.userProfile.realName} \uC120\uC0DD\uB2D8`,
        date: this.getTodayString()
      };
      if (!this.state.recommendedBooks) {
        this.state.recommendedBooks = [...MIDDLE_SCHOOL_BOOKS];
      }
      this.state.recommendedBooks.unshift(newBook);
      this.save();
      return newBook;
    }
    getRecommendedBooks() {
      return [...this.state.recommendedBooks || MIDDLE_SCHOOL_BOOKS];
    }
    // Select class for teacher dashboard view
    setSelectedClassKey(key) {
      this.state.selectedClassKey = key;
      this.save();
    }
    getStudentsByClass(grade = 2, classNum = 3) {
      const g = Number(grade);
      const c = Number(classNum);
      if (g === 2 && c === 3) return this.state.students;
      return this.state.schoolStudents.filter((s) => s.grade === g && s.classNum === c);
    }
    // Scoring methods
    addMannersScore(points) {
      this.state.mannersScore += points;
      this.state.totalPoints += points;
      this.syncCurrentStudentToClassList();
      this.save();
    }
    addTypingScore(points, cpm, acc) {
      this.state.typingScore += points;
      this.state.totalPoints += points;
      if (cpm > this.state.typingBestCPM) {
        this.state.typingBestCPM = cpm;
      }
      if (acc > this.state.typingAcc) {
        this.state.typingAcc = acc;
      }
      this.syncCurrentStudentToClassList();
      this.save();
    }
    addReadingScore(points, readingEntry) {
      this.state.readingScore += points;
      this.state.totalPoints += points;
      if (readingEntry) {
        if (!this.state.myReadingLogs) this.state.myReadingLogs = [];
        this.state.myReadingLogs.unshift({
          ...readingEntry,
          date: this.getTodayString(),
          pointsEarned: points
        });
      }
      this.syncCurrentStudentToClassList();
      this.save();
    }
    completeQuiz(points = 20) {
      if (this.state.todayQuizDone) return false;
      this.state.todayQuizDone = true;
      this.state.mannersScore += points;
      this.state.totalPoints += points;
      this.syncCurrentStudentToClassList();
      this.save();
      return true;
    }
    updateComment(newComment) {
      this.state.myComment = newComment.trim();
      this.syncCurrentStudentToClassList();
      this.save();
    }
    giveTeacherPraise(studentNumber, bonusPoints = 50, classNum = 3, grade = 2) {
      const list = this.getStudentsByClass(grade, classNum);
      const s = list.find((item) => item.number === studentNumber);
      if (s) {
        s.mannersScore += bonusPoints;
        s.totalPoints += bonusPoints;
        s.hasSticker = true;
        if (s.number === this.state.userProfile.number && s.classNum === this.state.userProfile.classNum) {
          this.state.mannersScore += bonusPoints;
          this.state.totalPoints += bonusPoints;
        }
        this.save();
        return true;
      }
      return false;
    }
    syncCurrentStudentToClassList() {
      const num = this.state.userProfile.number;
      const idx = this.state.students.findIndex((s) => s.number === num);
      if (idx >= 0) {
        this.state.students[idx] = {
          ...this.state.students[idx],
          realName: this.state.userProfile.realName,
          nickname: this.state.userProfile.nickname,
          mannersScore: this.state.mannersScore,
          typingScore: this.state.typingScore,
          readingScore: this.state.readingScore,
          totalPoints: this.state.totalPoints,
          streak: this.state.streak,
          typingBestCPM: this.state.typingBestCPM,
          typingAcc: this.state.typingAcc,
          checked: Object.keys(this.state.todaySubChecked).length > 0,
          quizDone: this.state.todayQuizDone,
          comment: this.state.myComment
        };
      }
    }
    // Get Top 20 sorted by category ('total' | 'manners' | 'typing' | 'reading') & scope ('class' | 'grade' | 'school')
    getRankedStudents(category = "total", scope = "class", classKey = this.state.selectedClassKey || "2-3") {
      let sourceList = this.state.students;
      if (scope === "class") {
        const [g, c] = classKey.split("-").map(Number);
        sourceList = this.getStudentsByClass(g, c);
      } else if (scope === "grade") {
        sourceList = this.state.gradeStudents;
      } else if (scope === "school") {
        sourceList = this.state.schoolStudents;
      }
      const copy = [...sourceList];
      if (category === "manners") {
        return copy.sort((a, b) => b.mannersScore - a.mannersScore);
      } else if (category === "typing") {
        return copy.sort((a, b) => b.typingScore - a.typingScore);
      } else if (category === "reading") {
        return copy.sort((a, b) => b.readingScore - a.readingScore);
      }
      return copy.sort((a, b) => b.totalPoints - a.totalPoints);
    }
    getClassStats(classKey = this.state.selectedClassKey || "2-3") {
      const [g, c] = classKey.split("-").map(Number);
      const students = this.getStudentsByClass(g, c);
      const total = students.length;
      const completedCount = students.filter((s) => s.checked && s.quizDone).length;
      const activeCount = students.filter((s) => s.checked || s.quizDone).length;
      const avgCPM = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.typingBestCPM || 0), 0) / total) : 0;
      const totalClassPoints = students.reduce((acc, cur) => acc + (cur.totalPoints || 0), 0);
      const avgPoints = total > 0 ? Math.round(totalClassPoints / total) : 0;
      const mannersAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.mannersScore || 0), 0) / total) : 0;
      const typingAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.typingScore || 0), 0) / total) : 0;
      const readingAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.readingScore || 0), 0) / total) : 0;
      const participationRate = total > 0 ? Math.round(activeCount / total * 100) : 0;
      return {
        total,
        studentCount: total,
        completedCount,
        activeCount,
        avgCPM,
        totalClassPoints,
        avgPoints,
        totalAvg: avgPoints,
        mannersAvg,
        typingAvg,
        readingAvg,
        participationRate
      };
    }
    checkBadges() {
      return BADGES.filter((b) => b.req(this.state));
    }
  };
  var appState = new AppState();

  // src/js/typing-texts.js
  var HANCOM_KEY_STAGES = [
    {
      id: "stage_home",
      name: "1\uB2E8\uACC4: \uAE30\uBCF8\uC790\uB9AC (Home Row)",
      desc: "\uC67C\uC190(\u3141 \u3134 \u3147 \u3139)\uACFC \uC624\uB978\uC190(\u3153 \u314F \u3163 ;)\uC758 \uAE30\uBCF8 \uC190\uAC00\uB77D \uC704\uCE58 \uC5F0\uC2B5",
      keys: ["\u3141", "\u3134", "\u3147", "\u3139", "\u3153", "\u314F", "\u3163", ";"],
      keyCodes: ["KeyA", "KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL", "Semicolon"]
    },
    {
      id: "stage_top",
      name: "2\uB2E8\uACC4: \uC717\uC790\uB9AC (Top Row)",
      desc: "\uC67C\uC190 \uC717\uAE00\uC1E0(\u3142 \u3148 \u3137 \u3131 \u3145)\uC640 \uC624\uB978\uC190 \uC717\uAE00\uC1E0(\u315B \u3155 \u3151 \u3150 \u3154)",
      keys: ["\u3142", "\u3148", "\u3137", "\u3131", "\u3145", "\u315B", "\u3155", "\u3151", "\u3150", "\u3154"],
      keyCodes: ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"]
    },
    {
      id: "stage_bottom",
      name: "3\uB2E8\uACC4: \uC544\uB7AB\uC790\uB9AC (Bottom Row)",
      desc: "\uC67C\uC190 \uC544\uB7AB\uAE00\uC1E0(\u314B \u314C \u314A \u314D)\uC640 \uC624\uB978\uC190 \uC544\uB7AB\uAE00\uC1E0(\u3160 \u315C \u3161)",
      keys: ["\u314B", "\u314C", "\u314A", "\u314D", "\u3160", "\u315C", "\u3161"],
      keyCodes: ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"]
    },
    {
      id: "stage_symbols",
      name: "4\uB2E8\uACC4: \uC22B\uC790 \uBC0F \uAE30\uD638 \uC790\uB9AC",
      desc: "\uC0C1\uB2E8 \uC22B\uC790\uC5F4(1 2 3 4 5 6 7 8 9 0) \uBC0F \uBB38\uC7A5\uBD80\uD638(! . , ?)",
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", ".", ",", "?"],
      keyCodes: ["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Digit1", "Period", "Comma", "Slash"]
    }
  ];
  var WORD_PRACTICE_LIST = [
    "\uBC30\uB824",
    "\uC57D\uC18D",
    "\uC2DC\uAC04",
    "\uC778\uC0AC",
    "\uC874\uC911",
    "\uC6B0\uC815",
    "\uB4F1\uAD50",
    "\uAD50\uC2E4",
    "\uAE09\uC2DD",
    "\uCC45\uC784",
    "\uC815\uC9C1",
    "\uC131\uC7A5",
    "\uC591\uC2EC",
    "\uB3C5\uC11C",
    "\uB178\uB825",
    "\uBBF8\uC18C",
    "\uD76C\uB9DD",
    "\uAC10\uC0AC",
    "\uBC30\uC6C0",
    "\uACF5\uAC10",
    "\uCE5C\uC808",
    "\uB9C8\uC74C",
    "\uB514\uBC97",
    "\uC218\uC5C5",
    "\uCCAD\uACB0",
    "\uC548\uC804",
    "\uCE5C\uAD6C",
    "\uC6A9\uAE30",
    "\uC2E4\uCC9C",
    "\uC9C0\uD61C"
  ];
  var SHORT_SENTENCES = [
    {
      book: "\uC6D0\uB354 (Wonder)",
      author: "R.J. \uD314\uB77C\uC2DC\uC624",
      text: "\uC633\uC74C\uACFC \uCE5C\uC808\uD568 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD55C\uB2E4\uBA74, \uD56D\uC0C1 \uCE5C\uC808\uD568\uC744 \uC120\uD0DD\uD558\uB77C."
    },
    {
      book: "\uC544\uBAAC\uB4DC",
      author: "\uC190\uC6D0\uD3C9",
      text: "\uAD6C\uD560 \uC218 \uC5C6\uB294 \uC778\uAC04\uC774\uB780 \uC5C6\uB2E4. \uAD6C\uD558\uB824\uB294 \uC190\uAE38\uC744 \uBA48\uCD94\uC9C0\uB9CC \uC54A\uB294\uB2E4\uBA74."
    },
    {
      book: "\uC2DC\uAC04\uC744 \uD30C\uB294 \uC0C1\uC810",
      author: "\uAE40\uC120\uC601",
      text: "\uC2DC\uAC04\uC740 \uBD99\uC7A1\uC544 \uB458 \uC218\uB3C4 \uC5C6\uACE0 \uBBF8\uB9AC \uAC00\uBD88\uD560 \uC218\uB3C4 \uC5C6\uB2E4. \uC624\uC9C1 \uC9C0\uAE08 \uC774 \uC21C\uAC04\uC5D0\uB9CC \uC874\uC7AC\uD55C\uB2E4."
    },
    {
      book: "\uCCB4\uB9AC\uC0C8\uC6B0: \uBE44\uBC00\uAE00\uC785\uB2C8\uB2E4",
      author: "\uD669\uC601\uBBF8",
      text: "\uB098\uB97C \uC2EB\uC5B4\uD558\uB294 \uC0AC\uB78C\uC5D0\uAC8C \uC2E0\uACBD \uC4F0\uB290\uB77C, \uC815\uC791 \uB098\uB97C \uC88B\uC544\uD558\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uC18C\uD640\uD558\uC9C0 \uB9D0\uC790."
    },
    {
      book: "\uD398\uC778\uD2B8",
      author: "\uC774\uD76C\uC601",
      text: "\uC644\uBCBD\uD55C \uBD80\uBAA8\uB3C4, \uC644\uBCBD\uD55C \uC790\uB140\uB3C4 \uC5C6\uB2E4. \uC6B0\uB9AC\uB294 \uC11C\uB85C\uB97C \uB9C8\uC8FC\uD558\uBA70 \uD568\uAED8 \uBC30\uC6B0\uACE0 \uC790\uB780\uB2E4."
    },
    {
      book: "\uC5B4\uB9B0 \uC655\uC790",
      author: "\uC0DD\uD14D\uC950\uD398\uB9AC",
      text: "\uAC00\uC7A5 \uC911\uC694\uD55C \uAC83\uC740 \uB208\uC5D0 \uBCF4\uC774\uC9C0 \uC54A\uC544. \uB9C8\uC74C\uC73C\uB85C \uBCF4\uC544\uC57C\uB9CC \uBD84\uBA85\uD558\uAC8C \uBCFC \uC218 \uC788\uC5B4."
    },
    {
      book: "\uC790\uC804\uAC70 \uB3C4\uB451",
      author: "\uBC15\uC644\uC11C",
      text: "\uBC14\uB78C\uC774 \uBD88\uC5B4 \uB118\uC5B4\uB728\uB9B0 \uC790\uC804\uAC70\uB97C \uC138\uC6CC \uB450\uACE0 \uB3CC\uC544\uC124 \uB54C\uC758 \uBD80\uB044\uB7EC\uC6C0, \uADF8\uAC83\uC774 \uB0B4 \uC591\uC2EC\uC774\uC5C8\uB2E4."
    },
    {
      book: "\uC720\uC9C4\uACFC \uC720\uC9C4",
      author: "\uC774\uAE08\uC774",
      text: "\uC0C1\uCC98\uB294 \uC228\uAE38\uC218\uB85D \uACEA\uC544\uAC00\uC9C0\uB9CC, \uD587\uBCD5 \uC544\uB798 \uAEBC\uB0B4\uB193\uC73C\uBA74 \uBE44\uB85C\uC18C \uC544\uBB3C\uAE30 \uC2DC\uC791\uD55C\uB2E4."
    },
    {
      book: "\uC911\uD559 \uB4F1\uAD50 \uC608\uC808",
      author: "\uBC14\uB9845\uBD84 \uC9C0\uCE68",
      text: "\uAD50\uBB38 \uC55E \uC120\uC0DD\uB2D8\uACFC \uBC30\uC6C0\uD130 \uC9C0\uD0B4\uC774 \uC120\uC0DD\uB2D8\uAED8 \uBA48\uCD94\uC5B4 \uC11C\uC11C \uACF5\uC190\uD788 \uD5C8\uB9AC \uC219\uC5EC \uC778\uC0AC\uD569\uB2C8\uB2E4."
    },
    {
      book: "\uAE09\uC2DD\uC2E4 \uC608\uC808",
      author: "\uBC14\uB9845\uBD84 \uC9C0\uCE68",
      text: "\uC0C8\uCE58\uAE30 \uC5C6\uC774 \uD55C \uC904\uB85C \uC11C\uC11C \uBC30\uC2DD\uBC1B\uACE0 \uC870\uB9AC\uC2E4\uBB34\uC0AC\uB2D8\uAED8 \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC \uC778\uC0AC\uB97C \uC804\uD569\uB2C8\uB2E4."
    }
  ];
  var LONG_PASSAGES = [
    {
      id: "long_1",
      book: "\uC544\uBAAC\uB4DC",
      author: "\uC190\uC6D0\uD3C9",
      title: "\uC724\uC7AC\uC758 \uB3C5\uBC31\uACFC \uACF5\uAC10",
      text: "\uB450\uB824\uC6C0\uB3C4 \uBD84\uB178\uB3C4 \uB0B4\uAC90 \uC5C6\uC5C8\uB2E4. \uD558\uC9C0\uB9CC \uB0B4\uAC8C \uC5C6\uB294 \uADF8\uAC83\uC744 \uB0A8\uB4E4\uC740 \uACB0\uD568\uC774\uB77C \uBD88\uB800\uB2E4. \uC138\uC0C1 \uC0AC\uB78C\uB4E4\uC740 \uC27D\uAC8C \uD310\uB2E8\uD558\uACE0 \uC27D\uAC8C \uB2E8\uC815 \uC9D3\uB294\uB2E4. \uADF8\uB7EC\uB098 \uC138\uC0C1\uC744 \uC774\uD574\uD558\uB294 \uAC00\uC7A5 \uD655\uC2E4\uD55C \uAE38\uC740 \uC0C1\uB300\uBC29\uC758 \uC785\uC7A5\uC5D0\uC11C \uD55C \uAC78\uC74C \uBA48\uCD94\uC5B4 \uC11C\uC11C \uBC14\uB77C\uBCF4\uB294 \uC77C\uC774\uB2E4. \uB9C8\uC74C\uC758 \uBB38\uC740 \uC5B8\uC81C\uB098 \uC791\uC740 \uC190\uAE38\uC5D0\uC11C \uC5F4\uB9B0\uB2E4."
    },
    {
      id: "long_2",
      book: "\uC2DC\uAC04\uC744 \uD30C\uB294 \uC0C1\uC810",
      author: "\uAE40\uC120\uC601",
      title: "\uC9C0\uAE08 \uC774 \uC21C\uAC04\uC758 \uAE30\uC801",
      text: "\uC6B0\uB9AC\uAC00 \uBB34\uC2EC\uCF54 \uD758\uB824\uBCF4\uB0B4\uB294 \uC624\uB298\uC740 \uC5B4\uC81C \uC0DD\uC744 \uB9C8\uAC10\uD55C \uC774\uB4E4\uC774 \uADF8\uD1A0\uB85D \uAC04\uC808\uD788 \uBC14\uB77C\uB358 \uB0B4\uC77C\uC774\uB2E4. \uACFC\uAC70\uC5D0 \uC5BD\uB9E4\uC5EC \uC790\uCC45\uD558\uAC70\uB098 \uC624\uC9C0 \uC54A\uC740 \uBBF8\uB798\uB97C \uBBF8\uB9AC \uBD88\uC548\uD574\uD560 \uD544\uC694\uB294 \uC5C6\uB2E4. \uC9C0\uAE08 \uC228 \uC26C\uACE0 \uB300\uD654\uD558\uBA70 \uCC45\uC744 \uC77D\uB294 \uC774 \uCC2C\uB780\uD55C \uC21C\uAC04\uC5D0 \uC628 \uB9C8\uC74C\uC744 \uB2E4\uD574 \uC9D1\uC911\uD558\uB294 \uAC83, \uADF8\uAC83\uC774 \uC2DC\uAC04\uC758 \uC0C1\uC810\uC774 \uC6B0\uB9AC\uC5D0\uAC8C \uAC00\uB974\uCCD0 \uC900 \uC0B6\uC758 \uBE44\uBC00\uC774\uB2E4."
    },
    {
      id: "long_3",
      book: "\uCCB4\uB9AC\uC0C8\uC6B0: \uBE44\uBC00\uAE00\uC785\uB2C8\uB2E4",
      author: "\uD669\uC601\uBBF8",
      title: "\uC740\uB530\uC758 \uB450\uB824\uC6C0\uC744 \uB118\uC5B4\uC11C",
      text: "\uCE5C\uAD6C\uB4E4\uC758 \uB208\uCE58\uB97C \uBCF4\uBA70 \uBB34\uB9AC\uC5D0\uC11C \uC18C\uC678\uB420\uAE4C \uC804\uC804\uAE0D\uAE0D\uD558\uB358 \uB0A0\uB4E4\uC774 \uC788\uC5C8\uB2E4. \uD558\uC9C0\uB9CC \uBAA8\uB4E0 \uC0AC\uB78C\uC774 \uB098\uB97C \uC88B\uC544\uD560 \uC218\uB294 \uC5C6\uB2E4. \uB0B4 \uC9C4\uC815\uD55C \uAC00\uCE58\uB294 \uB0A8\uC758 \uC2DC\uC120\uC774 \uC544\uB2C8\uB77C \uB0B4\uAC00 \uC2A4\uC2A4\uB85C\uB97C \uC5BC\uB9C8\uB098 \uC544\uB07C\uACE0 \uC874\uC911\uD558\uB294\uAC00\uC5D0 \uB2EC\uB824 \uC788\uB2E4. \uC11C\uB85C \uB2E4\uB978 \uC6B0\uB9AC\uAC00 \uBAA8\uC5EC \uBE44\uB85C\uC18C \uC544\uB984\uB2E4\uC6B4 \uC6B0\uB9AC \uBC18 \uAD50\uC2E4\uC744 \uC774\uB8EC\uB2E4."
    }
  ];

  // src/js/typing-engine.js
  var CHOSUNG = ["\u3131", "\u3132", "\u3134", "\u3137", "\u3138", "\u3139", "\u3141", "\u3142", "\u3143", "\u3145", "\u3146", "\u3147", "\u3148", "\u3149", "\u314A", "\u314B", "\u314C", "\u314D", "\u314E"];
  var JUNGSUNG = ["\u314F", "\u3150", "\u3151", "\u3152", "\u3153", "\u3154", "\u3155", "\u3156", "\u3157", "\u3158", "\u3159", "\u315A", "\u315B", "\u315C", "\u315D", "\u315E", "\u315F", "\u3160", "\u3161", "\u3162", "\u3163"];
  var JONGSUNG = ["", "\u3131", "\u3132", "\u3133", "\u3134", "\u3135", "\u3136", "\u3137", "\u3139", "\u313A", "\u313B", "\u313C", "\u313D", "\u313E", "\u313F", "\u3140", "\u3141", "\u3142", "\u3144", "\u3145", "\u3146", "\u3147", "\u3148", "\u314A", "\u314B", "\u314C", "\u314D", "\u314E"];
  var COMPOSITE_CONSONANTS = {
    "\u3132": ["\u3131", "\u3131"],
    "\u3133": ["\u3131", "\u3145"],
    "\u3135": ["\u3134", "\u3148"],
    "\u3136": ["\u3134", "\u314E"],
    "\u3138": ["\u3137", "\u3137"],
    "\u313A": ["\u3139", "\u3131"],
    "\u313B": ["\u3139", "\u3141"],
    "\u313C": ["\u3139", "\u3142"],
    "\u313D": ["\u3139", "\u3145"],
    "\u313E": ["\u3139", "\u314C"],
    "\u313F": ["\u3139", "\u314D"],
    "\u3140": ["\u3139", "\u314E"],
    "\u3143": ["\u3142", "\u3142"],
    "\u3144": ["\u3142", "\u3145"],
    "\u3146": ["\u3145", "\u3145"],
    "\u3149": ["\u3148", "\u3148"]
  };
  var COMPOSITE_VOWELS = {
    "\u3150": ["\u314F", "\u3163"],
    "\u3152": ["\u3151", "\u3163"],
    "\u3154": ["\u3153", "\u3163"],
    "\u3156": ["\u3155", "\u3163"],
    "\u3158": ["\u3157", "\u314F"],
    "\u3159": ["\u3157", "\u314F", "\u3163"],
    "\u315A": ["\u3157", "\u3163"],
    "\u315D": ["\u315C", "\u3153"],
    "\u315E": ["\u315C", "\u3153", "\u3163"],
    "\u315F": ["\u315C", "\u3163"],
    "\u3162": ["\u3161", "\u3163"]
  };
  function atomizeJamo(j) {
    if (COMPOSITE_CONSONANTS[j]) return COMPOSITE_CONSONANTS[j];
    if (COMPOSITE_VOWELS[j]) return COMPOSITE_VOWELS[j];
    return [j];
  }
  function decomposeHangul(char) {
    if (!char) return [];
    const code = char.charCodeAt(0);
    if (code >= 12593 && code <= 12622) {
      return atomizeJamo(char);
    }
    if (code >= 12623 && code <= 12643) {
      return atomizeJamo(char);
    }
    if (code >= 44032 && code <= 55203) {
      const s = code - 44032;
      const l = Math.floor(s / 588);
      const v = Math.floor(s % 588 / 28);
      const t = s % 28;
      const res = [];
      atomizeJamo(CHOSUNG[l]).forEach((j) => res.push(j));
      atomizeJamo(JUNGSUNG[v]).forEach((j) => res.push(j));
      if (t > 0) {
        atomizeJamo(JONGSUNG[t]).forEach((j) => res.push(j));
      }
      return res;
    }
    return [char];
  }
  function isHangulPrefix(partialChar, fullChar) {
    if (!partialChar || !fullChar) return false;
    if (partialChar === fullChar) return true;
    const pJamos = decomposeHangul(partialChar);
    const fJamos = decomposeHangul(fullChar);
    if (pJamos.length > fJamos.length) return false;
    for (let i = 0; i < pJamos.length; i++) {
      if (pJamos[i] !== fJamos[i]) return false;
    }
    return true;
  }
  var KEYCODE_TO_KOREAN = {
    "KeyQ": "\u3142",
    "KeyW": "\u3148",
    "KeyE": "\u3137",
    "KeyR": "\u3131",
    "KeyT": "\u3145",
    "KeyY": "\u315B",
    "KeyU": "\u3155",
    "KeyI": "\u3151",
    "KeyO": "\u3150",
    "KeyP": "\u3154",
    "KeyA": "\u3141",
    "KeyS": "\u3134",
    "KeyD": "\u3147",
    "KeyF": "\u3139",
    "KeyG": "\u314E",
    "KeyH": "\u3157",
    "KeyJ": "\u3153",
    "KeyK": "\u314F",
    "KeyL": "\u3163",
    "Semicolon": ";",
    "KeyZ": "\u314B",
    "KeyX": "\u314C",
    "KeyC": "\u314A",
    "KeyV": "\u314D",
    "KeyB": "\u3160",
    "KeyN": "\u315C",
    "KeyM": "\u3161",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Period": ".",
    "Comma": ",",
    "Slash": "?"
  };
  var KEY_FINGER_GUIDE = {
    "\u3142": "\uC67C\uC190 \uC0C8\uB07C",
    "\u3141": "\uC67C\uC190 \uC0C8\uB07C",
    "\u314B": "\uC67C\uC190 \uC0C8\uB07C",
    "1": "\uC67C\uC190 \uC0C8\uB07C",
    "\u3148": "\uC67C\uC190 \uC57D\uC9C0",
    "\u3134": "\uC67C\uC190 \uC57D\uC9C0",
    "\u314C": "\uC67C\uC190 \uC57D\uC9C0",
    "2": "\uC67C\uC190 \uC57D\uC9C0",
    "\u3137": "\uC67C\uC190 \uC911\uC9C0",
    "\u3147": "\uC67C\uC190 \uC911\uC9C0",
    "\u314A": "\uC67C\uC190 \uC911\uC9C0",
    "3": "\uC67C\uC190 \uC911\uC9C0",
    "\u3131": "\uC67C\uC190 \uAC80\uC9C0",
    "\u3139": "\uC67C\uC190 \uAC80\uC9C0",
    "\u314D": "\uC67C\uC190 \uAC80\uC9C0",
    "4": "\uC67C\uC190 \uAC80\uC9C0",
    "5": "\uC67C\uC190 \uAC80\uC9C0",
    "\u3145": "\uC67C\uC190 \uAC80\uC9C0",
    "\u314E": "\uC67C\uC190 \uAC80\uC9C0",
    "\u315B": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "\u3153": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "\u315C": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "6": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "7": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "\u3157": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "\u3160": "\uC624\uB978\uC190 \uAC80\uC9C0",
    "\u3155": "\uC624\uB978\uC190 \uC911\uC9C0",
    "\u314F": "\uC624\uB978\uC190 \uC911\uC9C0",
    "\u3161": "\uC624\uB978\uC190 \uC911\uC9C0",
    "8": "\uC624\uB978\uC190 \uC911\uC9C0",
    "\u3151": "\uC624\uB978\uC190 \uC57D\uC9C0",
    "\u3163": "\uC624\uB978\uC190 \uC57D\uC9C0",
    "9": "\uC624\uB978\uC190 \uC57D\uC9C0",
    "\u3150": "\uC624\uB978\uC190 \uC0C8\uB07C",
    "\u3154": "\uC624\uB978\uC190 \uC0C8\uB07C",
    ";": "\uC624\uB978\uC190 \uC0C8\uB07C",
    "0": "\uC624\uB978\uC190 \uC0C8\uB07C"
  };
  function getCharStrokeCount(char) {
    if (!char) return 0;
    const code = char.charCodeAt(0);
    if (code >= 44032 && code <= 55203) {
      const sIndex = code - 44032;
      const lIndex = Math.floor(sIndex / 588);
      const vIndex = Math.floor(sIndex % 588 / 28);
      const tIndex = sIndex % 28;
      let count = 2;
      const jung = JUNGSUNG[vIndex];
      if (["\u3158", "\u3159", "\u315A", "\u315D", "\u315E", "\u315F", "\u3162", "\u3152", "\u3156"].includes(jung)) count += 1;
      if (["\u3132", "\u3138", "\u3143", "\u3146", "\u3149"].includes(CHOSUNG[lIndex])) count += 1;
      if (tIndex > 0) {
        count += 1;
        const jong = JONGSUNG[tIndex];
        if (["\u3133", "\u3135", "\u3136", "\u313A", "\u313B", "\u313C", "\u313D", "\u313E", "\u313F", "\u3140", "\u3144", "\u3146", "\u3132"].includes(jong)) {
          count += 1;
        }
      }
      return count;
    }
    if (/[A-Z]/.test(char)) return 2;
    return 1;
  }
  var KeyPracticeSession = class {
    constructor(stage, onUpdate = () => {
    }, onComplete = () => {
    }) {
      this.stage = stage;
      this.keys = [...stage.keys];
      this.onUpdate = onUpdate;
      this.onComplete = onComplete;
      this.currentIndex = 0;
      this.correctCount = 0;
      this.totalAttempts = 0;
      this.startTime = null;
      this.isFinished = false;
    }
    getCurrentKey() {
      return this.keys[this.currentIndex];
    }
    getCurrentFingerGuide() {
      const key = this.getCurrentKey();
      return KEY_FINGER_GUIDE[key] || "\uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC190\uAC00\uB77D";
    }
    handleKeyDown(event) {
      if (this.isFinished) return;
      if (!this.startTime) this.startTime = Date.now();
      const targetKey = this.getCurrentKey();
      let pressedKey = event.key;
      const koreanFromCode = KEYCODE_TO_KOREAN[event.code];
      const isMatch = pressedKey === targetKey || koreanFromCode === targetKey;
      this.totalAttempts++;
      if (isMatch) {
        this.correctCount++;
        this.currentIndex++;
        if (this.currentIndex >= this.keys.length) {
          this.finish();
        } else {
          this.onUpdate(this.getStatus(true));
        }
        return true;
      } else {
        this.onUpdate(this.getStatus(false));
        return false;
      }
    }
    getStatus(lastMatch = true) {
      const elapsedMinutes = this.startTime ? Math.max((Date.now() - this.startTime) / 6e4, 5e-3) : 0;
      const cpm = elapsedMinutes > 0 ? Math.round(this.correctCount / elapsedMinutes) : 0;
      const accuracy = this.totalAttempts > 0 ? Math.round(this.correctCount / this.totalAttempts * 100) : 100;
      const progress = Math.round(this.currentIndex / this.keys.length * 100);
      return {
        currentKey: this.getCurrentKey(),
        fingerGuide: this.getCurrentFingerGuide(),
        currentIndex: this.currentIndex,
        totalKeys: this.keys.length,
        progress,
        cpm,
        accuracy,
        lastMatch,
        isFinished: this.isFinished
      };
    }
    finish() {
      this.isFinished = true;
      const finalStatus = this.getStatus(true);
      this.onUpdate(finalStatus);
      this.onComplete(finalStatus);
    }
    reset() {
      this.currentIndex = 0;
      this.correctCount = 0;
      this.totalAttempts = 0;
      this.startTime = null;
      this.isFinished = false;
      this.onUpdate(this.getStatus(true));
    }
  };
  var HancomSentenceSession = class {
    constructor(targetText, onUpdate = () => {
    }, onComplete = () => {
    }) {
      this.targetText = targetText.trim();
      this.onUpdate = onUpdate;
      this.onComplete = onComplete;
      this.input = "";
      this.startTime = null;
      this.endTime = null;
      this.timerInterval = null;
      this.isFinished = false;
    }
    start() {
      if (this.startTime) return;
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.onUpdate(this.getStatus());
      }, 100);
    }
    handleInput(val) {
      if (this.isFinished) return;
      if (!this.startTime && val.length > 0) {
        this.start();
      }
      this.input = val;
      if (this.input.length >= this.targetText.length && this.input.trim() === this.targetText) {
        this.finish();
      } else {
        this.onUpdate(this.getStatus());
      }
    }
    submitLine() {
      if (this.isFinished) return;
      if (!this.startTime && this.input.length > 0) {
        this.start();
      }
      this.finish();
    }
    getStatus() {
      const elapsedMinutes = this.startTime ? Math.max(((this.endTime || Date.now()) - this.startTime) / 6e4, 5e-3) : 0;
      let correctChars = 0;
      let typedStrokes = 0;
      const len = Math.min(this.input.length, this.targetText.length);
      for (let i = 0; i < len; i++) {
        const tc = this.targetText[i];
        const ic = this.input[i];
        if (ic === tc) {
          correctChars++;
          typedStrokes += getCharStrokeCount(ic);
        } else if (i === this.input.length - 1 && isHangulPrefix(ic, tc)) {
          const pJamos = decomposeHangul(ic);
          typedStrokes += pJamos.length;
          correctChars += 0.8;
        }
      }
      const accuracy = this.input.length > 0 ? Math.min(100, Math.max(0, Math.round(correctChars / this.input.length * 100))) : 100;
      const cpm = elapsedMinutes > 0 ? Math.round(typedStrokes / elapsedMinutes) : 0;
      const progress = Math.min(100, Math.round(this.input.length / this.targetText.length * 100));
      const elapsedSeconds = this.startTime ? Math.floor(((this.endTime || Date.now()) - this.startTime) / 1e3) : 0;
      return {
        targetText: this.targetText,
        input: this.input,
        cpm,
        accuracy,
        progress,
        elapsedSeconds,
        isFinished: this.isFinished,
        isExactMatch: this.input.trim() === this.targetText
      };
    }
    finish() {
      if (this.isFinished) return;
      this.isFinished = true;
      this.endTime = Date.now();
      clearInterval(this.timerInterval);
      const finalStatus = this.getStatus();
      this.onUpdate(finalStatus);
      this.onComplete(finalStatus);
    }
    reset(newText = this.targetText) {
      clearInterval(this.timerInterval);
      this.targetText = newText.trim();
      this.input = "";
      this.startTime = null;
      this.endTime = null;
      this.isFinished = false;
      this.onUpdate(this.getStatus());
    }
  };

  // src/js/sound.js
  var SoundManager = class {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }
    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }
    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
    playKeyTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440 + Math.random() * 80, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {
      }
    }
    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.06);
      } catch (e) {
      }
    }
    playSuccess() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = freq;
          const startTime = this.ctx.currentTime + idx * 0.08;
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.08, startTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(1e-3, startTime + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.32);
        });
      } catch (e) {
      }
    }
    playError() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
      } catch (e) {
      }
    }
    playCelebration() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const chord = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51];
        chord.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.value = freq;
          const startTime = this.ctx.currentTime + idx * 0.05;
          gain.gain.setValueAtTime(0.06, startTime);
          gain.gain.exponentialRampToValueAtTime(1e-3, startTime + 0.6);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.65);
        });
      } catch (e) {
      }
    }
  };
  var sounds = new SoundManager();

  // src/js/confetti.js
  function triggerConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ["#3B82F6", "#EF4444", "#F59E0B", "#10B981", "#8B5CF6", "#EC4899"];
    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 50,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 20,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }
    let animationFrame;
    const startTime = Date.now();
    function render() {
      const elapsed = Date.now() - startTime;
      if (elapsed > 2500) {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45;
        p.vx *= 0.98;
        p.rotation += p.rotationSpeed;
        p.opacity = Math.max(0, 1 - elapsed / 2400);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      });
      animationFrame = requestAnimationFrame(render);
    }
    render();
  }

  // src/js/firebase-config.js
  var firebase2 = window.firebase;
  var firebaseConfig = {
    projectId: "better-school-life-260913",
    appId: "1:333970857991:web:8b3165032a7fd38c158aa2",
    storageBucket: "better-school-life-260913.firebasestorage.app",
    apiKey: "AIzaSyDxCDJ-agfDGiFN6sBTdlk6TB-TodfeUDw",
    authDomain: "better-school-life-260913.firebaseapp.com",
    messagingSenderId: "333970857991"
  };
  if (!firebase2.apps.length) {
    firebase2.initializeApp(firebaseConfig);
  }
  var auth = firebase2.auth();
  var db = firebase2.firestore();
  var googleProvider = new firebase2.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  // src/js/roles.js
  var SCHOOL_DOMAIN = "kyunghee.sen.ms.kr";
  var STUDENT_ID_PATTERN = /^(\d{2})(\d)(\d)(\d{2})$/;
  var EXTRA_TEACHER_DOMAINS = ["sen.go.kr"];
  var TEST_TEACHER_CODE_HASH = "2bd394809ca042d614cf6059adc332fdd2cc93cb5fe116b4c9356255d6fdb6b8";
  var TEACHER_CODE_SALT = "barum5-teacher:";
  function normalizeTeacherCode(code = "") {
    return String(code).trim().toUpperCase();
  }
  var DEV_TEST_LOGIN_ENABLED = true;
  function splitEmail(email = "") {
    const [localPart = "", domain = ""] = String(email).trim().toLowerCase().split("@");
    return { localPart, domain };
  }
  function parseStudentEmail(email = "") {
    const { localPart, domain } = splitEmail(email);
    if (domain !== SCHOOL_DOMAIN) return null;
    const match = localPart.match(STUDENT_ID_PATTERN);
    if (!match) return null;
    const [, year, grade, classNum, number] = match.map(Number);
    return { entryYear: 2e3 + year, grade, classNum, number };
  }
  function detectRoleFromEmail(email = "") {
    const { localPart, domain } = splitEmail(email);
    if (!localPart || !domain) return null;
    if (parseStudentEmail(email)) return "student";
    if (domain === SCHOOL_DOMAIN || EXTRA_TEACHER_DOMAINS.includes(domain)) return "teacher";
    return null;
  }
  function resolveAccountRole(email, stored = {}) {
    if (stored.role === "teacher" && stored.roleSource === "code") {
      return { role: "teacher", roleSource: "code" };
    }
    const detected = detectRoleFromEmail(email);
    if (detected) return { role: detected, roleSource: "auto" };
    return { role: "student", roleSource: "default" };
  }
  async function verifyTestTeacherCode(code = "") {
    const bytes = new TextEncoder().encode(TEACHER_CODE_SALT + normalizeTeacherCode(code));
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    const hex = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
    return hex === TEST_TEACHER_CODE_HASH;
  }

  // src/js/auth.js
  var ROLE_LABELS = {
    student: "\u{1F468}\u200D\u{1F393} \uD559\uC0DD",
    teacher: "\u{1F469}\u200D\u{1F3EB} \uAD50\uC0AC"
  };
  var ROLE_SOURCE_LABELS = {
    auto: "\uC774\uBA54\uC77C\uB85C \uC790\uB3D9 \uAD6C\uBD84",
    code: "\uAD50\uC0AC \uC778\uC99D \uCF54\uB4DC\uB85C \uC2B9\uACA9",
    default: "\uC790\uB3D9 \uAD6C\uBD84 \uC548 \uB428 (\uAE30\uBCF8 \uD559\uC0DD)",
    test: "\uAC1C\uBC1C\uC6A9 \uD14C\uC2A4\uD2B8 \uACC4\uC815"
  };
  var LOGIN_ERROR_MESSAGES = {
    "auth/configuration-not-found": "Firebase \uCF58\uC194\uC5D0\uC11C Authentication(Google \uB85C\uADF8\uC778)\uC774 \uC544\uC9C1 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    "auth/operation-not-allowed": "Firebase \uCF58\uC194\uC5D0\uC11C Google \uB85C\uADF8\uC778 \uC81C\uACF5\uC5C5\uCCB4\uAC00 \uC0AC\uC6A9 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    "auth/unauthorized-domain": "\uD604\uC7AC \uC0AC\uC774\uD2B8 \uC8FC\uC18C\uAC00 Firebase \uC2B9\uC778\uB41C \uB3C4\uBA54\uC778\uC5D0 \uB4F1\uB85D\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    "auth/popup-blocked": "\uBE0C\uB77C\uC6B0\uC800\uAC00 \uB85C\uADF8\uC778 \uD31D\uC5C5\uC744 \uCC28\uB2E8\uD588\uC2B5\uB2C8\uB2E4. \uD31D\uC5C5\uC744 \uD5C8\uC6A9\uD574 \uC8FC\uC138\uC694.",
    "auth/network-request-failed": "\uB124\uD2B8\uC6CC\uD06C \uC5F0\uACB0\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."
  };
  async function syncAccount(user) {
    const ref = db.collection("users").doc(user.uid);
    const prevAuth = appState.state.auth || {};
    let data = prevAuth.uid === user.uid ? { role: prevAuth.accountRole, roleSource: prevAuth.roleSource } : {};
    let hasStoredProfile = false;
    try {
      const doc = await ref.get();
      if (doc.exists) {
        data = doc.data();
        hasStoredProfile = !!data.nickname;
      }
    } catch (err) {
      console.warn("Firestore \uD504\uB85C\uD544 \uC870\uD68C \uC2E4\uD328 (\uB85C\uCEEC \uC0C1\uD0DC\uB85C \uC9C4\uD589)", err);
    }
    const { role, roleSource } = resolveAccountRole(user.email, data);
    ref.set({
      uid: user.uid,
      email: user.email,
      role,
      roleSource,
      lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch((err) => console.warn("Firestore role \uC800\uC7A5 \uC2E4\uD328", err));
    appState.applyAccount({ uid: user.uid, email: user.email, accountRole: role, roleSource });
    if (hasStoredProfile) {
      appState.updateProfile({
        grade: data.grade || appState.state.userProfile.grade,
        classNum: data.classNum || appState.state.userProfile.classNum,
        number: data.number || appState.state.userProfile.number,
        realName: data.realName || user.displayName || "",
        nickname: data.nickname
      });
    } else if (prevAuth.uid !== user.uid) {
      const studentInfo = role === "student" ? parseStudentEmail(user.email) : null;
      appState.updateProfile({
        ...studentInfo ? { grade: studentInfo.grade, classNum: studentInfo.classNum, number: studentInfo.number } : {},
        realName: user.displayName || "",
        nickname: user.displayName || ""
      });
    }
    return { isNewUser: !hasStoredProfile && prevAuth.uid !== user.uid, role };
  }
  function initAuthSession(onChange = () => {
  }) {
    auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          if (!appState.isTestAccount()) await syncAccount(user);
        } else if (appState.isLoggedIn() && !appState.isTestAccount()) {
          appState.clearAccount();
        }
      } catch (err) {
        console.error("\uC138\uC158 \uB3D9\uAE30\uD654 \uC2E4\uD328", err);
      }
      onChange();
    });
  }
  function openGoogleLoginModal(onSuccess = () => {
  }) {
    auth.signInWithPopup(googleProvider).then(async (result) => {
      const { isNewUser } = await syncAccount(result.user);
      sounds.playSuccess();
      if (isNewUser) {
        openProfileOnboardingModal(onSuccess, true);
      } else {
        onSuccess();
      }
    }).catch((error) => {
      console.error("Google \uB85C\uADF8\uC778 \uC5D0\uB7EC", error);
      if (error.code === "auth/popup-closed-by-user" || error.code === "auth/cancelled-popup-request") return;
      const reason = LOGIN_ERROR_MESSAGES[error.code] || "\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.";
      alert(`\uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.
${reason}
(\uC624\uB958 \uCF54\uB4DC: ${error.code || "unknown"})

\uD559\uAD50 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4(@kyunghee.sen.ms.kr)\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694.`);
    });
  }
  function signOutUser(onDone = () => {
  }) {
    if (appState.isTestAccount()) {
      appState.clearAccount();
      onDone();
      return;
    }
    auth.signOut().then(() => {
      appState.clearAccount();
      onDone();
    }).catch((error) => {
      console.error("\uB85C\uADF8\uC544\uC6C3 \uC5D0\uB7EC", error);
      alert("\uB85C\uADF8\uC544\uC6C3\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
    });
  }
  function openTeacherUpgradeModal(onSuccess = () => {
  }) {
    if (!appState.isLoggedIn()) {
      alert("\uAD50\uC0AC \uAD8C\uD55C \uC2E0\uCCAD\uC740 \uB85C\uADF8\uC778 \uD6C4\uC5D0 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uC6B0\uCE21 \uC0C1\uB2E8 \uB85C\uADF8\uC778 \uBC84\uD2BC\uC744 \uBA3C\uC800 \uB20C\uB7EC \uC8FC\uC138\uC694.");
      return;
    }
    if (appState.isVerifiedTeacher()) {
      alert("\uC774\uBBF8 \uAD50\uC0AC \uAD8C\uD55C\uC774 \uC788\uB294 \uACC4\uC815\uC785\uB2C8\uB2E4.");
      return;
    }
    let modal = document.getElementById("teacher-upgrade-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal-overlay";
      modal.id = "teacher-upgrade-modal";
      document.body.appendChild(modal);
    }
    modal.innerHTML = `
    <div class="modal-content" style="max-width: 440px; text-align: left;">
      <h3 style="font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span>\u{1F511}</span> \uAD50\uC0AC \uAD8C\uD55C \uC2E0\uCCAD
      </h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
        \uD604\uC7AC \uACC4\uC815(<strong>${appState.state.auth.email}</strong>)\uC740 \uAD50\uC0AC\uB85C \uC790\uB3D9 \uAD6C\uBD84\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.<br>
        \uD559\uAD50\uC5D0\uC11C \uC548\uB0B4\uBC1B\uC740 <strong>\uAD50\uC0AC \uC778\uC99D \uCF54\uB4DC</strong>\uB97C \uC785\uB825\uD558\uBA74 \uAD50\uC0AC \uAD8C\uD55C\uC73C\uB85C \uC804\uD658\uB429\uB2C8\uB2E4.
      </p>
      <input type="password" id="teacher-code-input" placeholder="\uAD50\uC0AC \uC778\uC99D \uCF54\uB4DC" autocomplete="off"
        style="width: 100%; padding: 0.7rem; border: 2px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700; margin-bottom: 0.5rem;">
      <div id="teacher-code-error" style="font-size: 0.8rem; color: #DC2626; min-height: 1.2em; margin-bottom: 0.75rem;"></div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-secondary" id="btn-cancel-teacher-code" style="flex: 1;">\uCDE8\uC18C</button>
        <button class="btn btn-primary" id="btn-submit-teacher-code" style="flex: 2; background: #4F46E5;">\uAD8C\uD55C \uC804\uD658\uD558\uAE30</button>
      </div>
    </div>
  `;
    modal.classList.add("active");
    const input = modal.querySelector("#teacher-code-input");
    const errorEl = modal.querySelector("#teacher-code-error");
    const submitBtn = modal.querySelector("#btn-submit-teacher-code");
    input.focus();
    modal.querySelector("#btn-cancel-teacher-code").onclick = () => modal.classList.remove("active");
    const fail = (message) => {
      sounds.playError();
      errorEl.textContent = message;
      submitBtn.disabled = false;
      input.select();
    };
    const submit = async () => {
      const code = normalizeTeacherCode(input.value);
      if (!code) {
        fail("\uAD50\uC0AC \uC778\uC99D \uCF54\uB4DC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
        return;
      }
      const { uid, email } = appState.state.auth;
      const promote = () => {
        appState.applyAccount({ uid, email, accountRole: "teacher", roleSource: "code" });
        sounds.playCelebration();
        modal.classList.remove("active");
        onSuccess();
      };
      submitBtn.disabled = true;
      if (appState.isTestAccount()) {
        if (await verifyTestTeacherCode(code)) promote();
        else fail("\uC778\uC99D \uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return;
      }
      db.collection("users").doc(uid).set({
        role: "teacher",
        roleSource: "code",
        teacherCode: code,
        roleUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).then(promote).catch((err) => {
        console.warn("\uAD50\uC0AC \uAD8C\uD55C \uC800\uC7A5 \uAC70\uBD80", err);
        if (err.code === "permission-denied") {
          fail("\uC778\uC99D \uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        } else {
          fail(`\uAD8C\uD55C \uD655\uC778 \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. (${err.code || "unknown"})`);
        }
      });
    };
    submitBtn.onclick = submit;
    input.onkeydown = (e) => {
      if (e.key === "Enter") submit();
    };
  }
  function openProfileOnboardingModal(onSuccess = () => {
  }, isNewUser = false, onTeacherUpgrade = onSuccess) {
    let modal = document.getElementById("profile-onboarding-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal-overlay";
      modal.id = "profile-onboarding-modal";
    }
    const { userProfile } = appState.state;
    const authInfo = appState.state.auth || {};
    const isLoggedIn = appState.isLoggedIn();
    const accountRole = isLoggedIn ? authInfo.accountRole || "student" : "student";
    const roleSourceLabel = isLoggedIn ? ROLE_SOURCE_LABELS[authInfo.roleSource] || ROLE_SOURCE_LABELS.default : "\uB85C\uADF8\uC778 \uC804 (\uCCB4\uD5D8 \uBAA8\uB4DC)";
    modal.innerHTML = `
    <div class="modal-content" style="max-width: 520px; text-align: left;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
          <span>\u{1F392}</span> \uB9C8\uC774\uD398\uC774\uC9C0 \xB7 \uD504\uB85C\uD544 \uC124\uC815
        </h3>
        <span class="badge ${isLoggedIn ? "badge-green" : "badge-gray"}">${isLoggedIn ? "Google \uC5F0\uB3D9\uB428" : "\uB85C\uADF8\uC778 \uC804"}</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
        \uC911\uD559\uAD50 \uD559\uAD50\uC0DD\uD65C\uC5D0 \uB9DE\uCD94\uC5B4 \uD559\uB144, \uBC18, \uBC88\uD638\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 <strong>\uB2C9\uB124\uC784</strong>\uC744 \uC124\uC815\uD574 \uC8FC\uC138\uC694.<br>
        <span style="color: #4F46E5; font-weight: 700;">* \uD559\uC0DD \uD654\uBA74\uC5D0\uB294 \uB2C9\uB124\uC784\uB9CC \uB178\uCD9C\uB418\uBA70, \uAD50\uC0AC \uD654\uBA74\uC5D0\uC11C\uB9CC \uC2E4\uBA85\uC774 \uD568\uAED8 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</span>
      </p>

      <!-- Account Role (\uC790\uB3D9 \uAD6C\uBD84, \uC9C1\uC811 \uC120\uD0DD \uBD88\uAC00) -->
      <div style="margin-bottom: 1.25rem; padding: 0.85rem 1rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-subtle); display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
        <div>
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">\uACC4\uC815 \uAD8C\uD55C</div>
          <div style="font-size: 1rem; font-weight: 800;">${ROLE_LABELS[accountRole]}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${isLoggedIn ? `${authInfo.email} \xB7 ` : ""}${roleSourceLabel}</div>
        </div>
        ${isLoggedIn && accountRole !== "teacher" ? `
          <button class="btn btn-secondary" id="btn-request-teacher" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">\u{1F511} \uAD50\uC0AC \uAD8C\uD55C \uC2E0\uCCAD</button>
        ` : ""}
      </div>

      <!-- School Info -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uD559\uB144</label>
          <select id="ob-grade" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            <option value="1" ${userProfile.grade === 1 ? "selected" : ""}>1\uD559\uB144</option>
            <option value="2" ${userProfile.grade === 2 ? "selected" : ""}>2\uD559\uB144</option>
            <option value="3" ${userProfile.grade === 3 ? "selected" : ""}>3\uD559\uB144</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uBC18 (1~7\uBC18)</label>
          <select id="ob-class" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            ${[1, 2, 3, 4, 5, 6, 7].map((c) => `<option value="${c}" ${userProfile.classNum === c ? "selected" : ""}>${c}\uBC18</option>`).join("")}
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uCD9C\uC11D \uBC88\uD638 (1~28\uBC88)</label>
          <input type="number" id="ob-number" value="${userProfile.number}" min="1" max="28" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
        </div>
      </div>

      <!-- Real Name & Nickname -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">
            \uC2E4\uBA85 (\uC120\uC0DD\uB2D8\uB9CC \uD655\uC778)
          </label>
          <input type="text" id="ob-realname" value="${userProfile.realName}" placeholder="\uC608: \uAE40\uBBFC\uC900" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: #4F46E5; display: block; margin-bottom: 0.3rem;">
            \uD65C\uB3D9 \uB2C9\uB124\uC784 (\uACF5\uAC1C)
          </label>
          <input type="text" id="ob-nickname" value="${userProfile.nickname}" placeholder="\uC608: \uBCC4\uBE5B\uB2EC\uBE5B" style="width: 100%; padding: 0.6rem; border: 2px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700;">
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
        ${!isNewUser ? `<button class="btn btn-secondary" id="btn-close-onboarding" style="flex: 1;">\uB2EB\uAE30</button>` : ""}
        <button class="btn btn-primary" id="btn-save-onboarding" style="flex: 2; background: #4F46E5;">
          \uC644\uB8CC\uD558\uACE0 \uC2DC\uC791\uD558\uAE30 \u2728
        </button>
      </div>
    </div>
  `;
    document.body.appendChild(modal);
    modal.classList.add("active");
    const btnRequestTeacher = modal.querySelector("#btn-request-teacher");
    if (btnRequestTeacher) {
      btnRequestTeacher.onclick = () => {
        modal.classList.remove("active");
        openTeacherUpgradeModal(onTeacherUpgrade);
      };
    }
    const btnClose = modal.querySelector("#btn-close-onboarding");
    if (btnClose) {
      btnClose.onclick = () => modal.classList.remove("active");
    }
    const btnSave = modal.querySelector("#btn-save-onboarding");
    if (btnSave) {
      btnSave.onclick = () => {
        const grade = parseInt(modal.querySelector("#ob-grade").value, 10) || 2;
        const classNum = parseInt(modal.querySelector("#ob-class").value, 10) || 3;
        const number = parseInt(modal.querySelector("#ob-number").value, 10) || 1;
        const realName = modal.querySelector("#ob-realname").value.trim() || "\uAE40\uBBFC\uC900";
        const nickname = modal.querySelector("#ob-nickname").value.trim() || "\uBCC4\uBE5B\uB2EC\uBE5B";
        appState.updateProfile({
          grade,
          classNum,
          number,
          realName,
          nickname
        });
        const { uid, email } = appState.state.auth;
        if (uid && !appState.isTestAccount()) {
          db.collection("users").doc(uid).set({
            uid,
            email,
            grade,
            classNum,
            number,
            realName,
            nickname,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true }).then(() => {
            sounds.playCelebration();
            modal.classList.remove("active");
            onSuccess();
          }).catch((err) => {
            console.warn("Firestore \uD504\uB85C\uD544 \uC800\uC7A5 \uC2E4\uD328 (\uC774 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5)", err);
            sounds.playCelebration();
            modal.classList.remove("active");
            onSuccess();
          });
        } else {
          sounds.playCelebration();
          modal.classList.remove("active");
          onSuccess();
        }
      };
    }
  }

  // src/js/chatbot.js
  var PROXY_URL = "";
  var SLANG_DICTIONARY = {
    "\uC874\uBC84": { meaning: "\uB05D\uAE4C\uC9C0 \uBC84\uD2F4\uB2E4\uB294 \uB73B\uC758 \uC18D\uC5B4", correct: "\uB05D\uAE4C\uC9C0 \uC778\uB0B4\uD558\uAE30, \uCC38\uACE0 \uACAC\uB514\uAE30" },
    "\uD0B9\uBC1B\uB124": { meaning: "\uB9E4\uC6B0 \uD654\uAC00 \uB098\uAC70\uB098 \uC5B4\uC774\uC5C6\uB2E4\uB294 \uB73B", correct: "\uC815\uB9D0 \uD654\uB09C\uB2E4, \uC5B4\uC774\uC5C6\uB2E4" },
    "\uC5B5\uD150": { meaning: "\uC5B5\uC9C0 \uD150\uC158, \uC5B5\uC9C0\uB85C \uC2E0\uB09C \uCC99\uD558\uB294 \uAC83", correct: "\uC5B5\uC9C0\uB85C \uAE30\uC6B4 \uB0B4\uAE30" },
    "\uAC1C\uC774\uB4DD": { meaning: "\uC544\uC8FC \uD070 \uC774\uB4DD\uC744 \uBCF4\uC558\uB2E4\uB294 \uB73B", correct: "\uD070 \uC774\uC775, \uC544\uC8FC \uC88B\uC740 \uC77C" },
    "\uB178\uC7BC": { meaning: "\uC7AC\uBBF8\uAC00 \uC5C6\uB2E4\uB294 \uB73B", correct: "\uC9C0\uB8E8\uD568, \uC7AC\uBBF8\uC5C6\uC74C" }
  };
  var chatbotEnabled = false;
  function setChatbotEnabled(enabled) {
    chatbotEnabled = enabled;
    const container = document.querySelector(".chatbot-container");
    if (container) container.style.display = enabled ? "" : "none";
  }
  var escapeHtml = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  var formatReply = (text) => escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
  async function askGemini(word) {
    if (!PROXY_URL) throw new Error("\uC911\uACC4 \uC11C\uBC84\uAC00 \uC544\uC9C1 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
    const res = await fetch(PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word })
    });
    if (!res.ok) throw new Error(`\uC911\uACC4 \uC11C\uBC84 \uC624\uB958 (${res.status})`);
    const data = await res.json();
    if (!data.reply) throw new Error("\uBE48 \uC751\uB2F5");
    return data.reply;
  }
  function initChatbot() {
    const container = document.createElement("div");
    container.className = "chatbot-container";
    container.style.display = chatbotEnabled ? "" : "none";
    container.innerHTML = `
    <div class="chatbot-bubble" id="chatbot-bubble">
      <div class="chatbot-header">
        <span>\u{1F331} \uBC14\uB978\uB9D0 \uCC57\uBD07</span>
        <button id="chatbot-close-btn">&times;</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chat-msg bot-msg">\uC548\uB155\uD558\uC138\uC694! \uD3C9\uC18C\uC5D0 \uAD81\uAE08\uD588\uB358 \uBE44\uC18D\uC5B4\uB098 \uC740\uC5B4, \uC2E0\uC870\uC5B4\uB97C \uC785\uB825\uD574\uBCF4\uC138\uC694. \uC62C\uBC14\uB978 \uC6B0\uB9AC\uB9D0\uC744 \uC54C\uB824\uB4DC\uB9B4\uAC8C\uC694!</div>
      </div>
      <div class="chatbot-input-area">
        <input type="text" id="chatbot-input" placeholder="\uC5EC\uAE30\uC5D0 \uB2E8\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694..." autocomplete="off">
        <button id="chatbot-send-btn">\uC804\uC1A1</button>
      </div>
    </div>
    <button class="chatbot-fab" id="chatbot-fab">\u{1F331}</button>
  `;
    document.body.appendChild(container);
    const style = document.createElement("style");
    style.textContent = `
    .chatbot-container { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; font-family: var(--font-sans); }
    .chatbot-fab { width: 56px; height: 56px; border-radius: 50%; background: var(--gradient-emerald); color: white; border: none; font-size: 1.5rem; box-shadow: var(--shadow-lg); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition-bounce); }
    .chatbot-fab:hover { transform: scale(1.1); }
    .chatbot-bubble { display: none; width: 320px; height: 420px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); border-radius: var(--radius-xl); box-shadow: var(--shadow-dark); border: 1px solid var(--border-light); flex-direction: column; overflow: hidden; position: absolute; bottom: 70px; right: 0; transform-origin: bottom right; animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .chatbot-bubble.active { display: flex; }
    .chatbot-header { background: var(--gradient-emerald); color: white; padding: 1rem; font-weight: 800; display: flex; justify-content: space-between; align-items: center; }
    .chatbot-header button { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
    .chatbot-messages { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.75rem; }
    .chat-msg { padding: 0.75rem 1rem; border-radius: var(--radius-lg); max-width: 85%; font-size: 0.85rem; line-height: 1.4; word-break: break-word; }
    .bot-msg { background: var(--bg-subtle); color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 4px; }
    .user-msg { background: var(--color-emerald); color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
    .chatbot-input-area { display: flex; padding: 0.75rem; border-top: 1px solid var(--border-light); background: white; }
    .chatbot-input-area input { flex: 1; border: 1px solid var(--border-light); padding: 0.5rem 0.75rem; border-radius: var(--radius-full); outline: none; font-family: inherit; font-size: 0.85rem; }
    .chatbot-input-area input:focus { border-color: var(--color-emerald); }
    .chatbot-input-area button { background: var(--color-emerald); color: white; border: none; border-radius: var(--radius-full); padding: 0 1rem; margin-left: 0.5rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
    .chatbot-input-area button:hover { background: #059669; }
    .typing-indicator { display: flex; gap: 4px; padding: 0.5rem 1rem; }
    .typing-indicator span { width: 6px; height: 6px; background: var(--text-muted); border-radius: 50%; animation: typing 1s infinite; }
    .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
    @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `;
    document.head.appendChild(style);
    const fab = document.getElementById("chatbot-fab");
    const bubble = document.getElementById("chatbot-bubble");
    const closeBtn = document.getElementById("chatbot-close-btn");
    const sendBtn = document.getElementById("chatbot-send-btn");
    const input = document.getElementById("chatbot-input");
    const messages = document.getElementById("chatbot-messages");
    fab.onclick = () => {
      bubble.classList.add("active");
      fab.style.display = "none";
    };
    closeBtn.onclick = () => {
      bubble.classList.remove("active");
      fab.style.display = "flex";
    };
    const addMessage = (text, isUser = false) => {
      const el = document.createElement("div");
      el.className = "chat-msg " + (isUser ? "user-msg" : "bot-msg");
      el.innerHTML = text;
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
    };
    const showTyping = () => {
      const el = document.createElement("div");
      el.className = "chat-msg bot-msg typing-indicator";
      el.id = "typing-ind";
      el.innerHTML = "<span></span><span></span><span></span>";
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
    };
    const removeTyping = () => {
      const el = document.getElementById("typing-ind");
      if (el) el.remove();
    };
    const handleSend = async () => {
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      addMessage(escapeHtml(text), true);
      showTyping();
      sendBtn.disabled = true;
      try {
        const reply = await askGemini(text);
        removeTyping();
        addMessage(formatReply(reply));
      } catch (err) {
        removeTyping();
        let fallback = null;
        for (const [slang, info] of Object.entries(SLANG_DICTIONARY)) {
          if (text.includes(slang)) fallback = info;
        }
        if (fallback) {
          addMessage(`'<strong>${escapeHtml(text)}</strong>'\uB294 ${fallback.meaning}\uB97C \uC758\uBBF8\uD560 \uC218 \uC788\uC5B4\uC694. \uD559\uAD50\uC5D0\uC11C\uB294 '<strong>${fallback.correct}</strong>'(\uC774)\uB77C\uACE0 \uD45C\uD604\uD574\uBCF4\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694? \u{1F60A}`);
        } else {
          addMessage("\uC785\uB825\uD574\uC8FC\uC2E0 \uB2E8\uC5B4\uC5D0 \uB300\uD574 \uC9C0\uAE08\uC740 \uB2F5\uBCC0\uD558\uAE30 \uC5B4\uB824\uC6CC\uC694. \uB2E4\uB978 \uB2E8\uC5B4\uB97C \uBB3C\uC5B4\uBCF4\uC2DC\uACA0\uC5B4\uC694? \u{1F972}");
        }
      } finally {
        sendBtn.disabled = false;
      }
    };
    sendBtn.onclick = handleSend;
    input.onkeydown = (e) => {
      if (e.key === "Enter" && !e.isComposing && !sendBtn.disabled) handleSend();
    };
  }

  // src/js/app.js
  function showToast(message, icon = "\u2728") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }
  var App = class {
    constructor() {
      this.currentView = "home";
      this.leaderboardCategory = "total";
      this.leaderboardScope = "class";
      this.showAllRanks = false;
      this.currentDomainIndex = 0;
      this.currentQuizIndex = 0;
      this.typingMode = "short";
      this.keyStageIndex = 0;
      this.keySession = null;
      this.sentenceIndex = 0;
      this.sentenceSession = null;
      this.passageIndex = 0;
      this.readingTemplate = "quote_cards";
      this.bookSourceType = "recommended";
      this.selectedBookId = "b1";
      this.readingLogs = [...INITIAL_READING_LOGS];
      this.tableFilter = "all";
      this.tableSearch = "";
      this.exhibitionIndex = 0;
      this.exhibitionTimer = null;
      this.init();
    }
    init() {
      this.bindHeader();
      appState.subscribe(() => this.updateHeaderStats());
      initChatbot();
      this.navigate("home");
      initAuthSession(() => {
        this.updateHeaderStats();
        this.navigate(this.currentView);
      });
    }
    bindHeader() {
      document.querySelectorAll("[data-view]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          const view = e.currentTarget.dataset.view;
          this.navigate(view);
        });
      });
      const soundBtn = document.getElementById("btn-sound-toggle");
      if (soundBtn) {
        soundBtn.addEventListener("click", () => {
          const enabled = sounds.toggle();
          soundBtn.textContent = enabled ? "\u{1F50A}" : "\u{1F507}";
          showToast(enabled ? "\uD6A8\uACFC\uC74C\uC774 \uCF1C\uC84C\uC2B5\uB2C8\uB2E4." : "\uD6A8\uACFC\uC74C\uC774 \uAEBC\uC84C\uC2B5\uB2C8\uB2E4.");
        });
      }
      const googleBtn = document.getElementById("btn-google-auth");
      if (googleBtn) {
        googleBtn.addEventListener("click", () => {
          sounds.playClick();
          if (appState.isLoggedIn()) {
            if (!confirm("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) return;
            signOutUser(() => {
              this.updateHeaderStats();
              this.navigate("home");
              showToast("\uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\u{1F44B}");
            });
            return;
          }
          this.startGoogleLogin();
        });
      }
      const userChip = document.getElementById("user-profile-chip");
      if (userChip) {
        userChip.addEventListener("click", () => {
          sounds.playClick();
          if (!appState.isLoggedIn()) {
            this.navigate("home");
            return;
          }
          openProfileOnboardingModal(() => {
            this.updateHeaderStats();
            this.navigate(this.currentView);
            showToast("\uD504\uB85C\uD544 \uC815\uBCF4\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\u2728");
          }, false, () => {
            this.updateHeaderStats();
            showToast("\uAD50\uC0AC \uAD8C\uD55C\uC73C\uB85C \uC804\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\u{1F469}\u200D\u{1F3EB}");
            this.navigate("teacher");
          });
        });
      }
      const modeBtn = document.getElementById("btn-mode-toggle");
      if (modeBtn) {
        modeBtn.addEventListener("click", () => {
          sounds.playClick();
          const newRole = appState.state.userProfile.role === "student" ? "teacher" : "student";
          if (!appState.setRole(newRole)) {
            this.promptTeacherAccess();
            return;
          }
          this.updateHeaderStats();
          if (newRole === "teacher") {
            showToast("\uAD50\uC0AC \uBAA8\uB4DC\uB85C \uC804\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD559\uC0DD\uB4E4\uC758 \uC2E4\uBA85\uACFC \uB2C9\uB124\uC784\uC774 \uD568\uAED8 \uD45C\uC2DC\uB429\uB2C8\uB2E4.", "\u{1F469}\u200D\u{1F3EB}");
            this.navigate("teacher");
          } else {
            showToast("\uD559\uC0DD \uBAA8\uB4DC\uB85C \uC804\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD559\uC0DD \uB2C9\uB124\uC784\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.", "\u{1F392}");
            this.navigate("home");
          }
        });
      }
      this.updateHeaderStats();
    }
    startGoogleLogin() {
      showToast("\uD559\uAD50 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4(@kyunghee.sen.ms.kr)\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694.", "\u{1F3EB}");
      openGoogleLoginModal(() => {
        this.updateHeaderStats();
        this.navigate(this.currentView === "teacher" && !appState.isVerifiedTeacher() ? "home" : this.currentView);
        const roleText = appState.isVerifiedTeacher() ? "\uAD50\uC0AC" : "\uD559\uC0DD";
        showToast(`${roleText} \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`, "\u{1F464}");
      });
    }
    // 개발용: Firebase 없이 학생/교사 상황 체험
    startTestLogin(role) {
      appState.loginAsTestAccount(role);
      this.updateHeaderStats();
      if (role === "teacher") {
        showToast("\uAD50\uC0AC \uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.", "\u{1F469}\u200D\u{1F3EB}");
        this.navigate("teacher");
      } else {
        showToast("\uD559\uC0DD \uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.", "\u{1F392}");
        this.navigate("home");
      }
    }
    // 교사 권한이 없을 때: 로그인 전이면 로그인 안내, 로그인 후면 [교사 권한 신청] 모달
    promptTeacherAccess() {
      if (!appState.isLoggedIn()) {
        showToast("\uAD50\uC0AC \uD654\uBA74\uC740 \uAD50\uC0AC \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD574\uC57C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "\u{1F512}");
        return;
      }
      openTeacherUpgradeModal(() => {
        this.updateHeaderStats();
        showToast("\uAD50\uC0AC \uAD8C\uD55C\uC73C\uB85C \uC804\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\u{1F469}\u200D\u{1F3EB}");
        this.navigate("teacher");
      });
    }
    updateHeaderStats() {
      const { totalPoints, streak, userProfile } = appState.state;
      const ptsEl = document.getElementById("header-points");
      const streakEl = document.getElementById("header-streak");
      const nameEl = document.getElementById("header-student-name");
      const roleIconEl = document.getElementById("header-role-icon");
      const classEl = document.getElementById("header-school-class");
      const modeBtn = document.getElementById("btn-mode-toggle");
      if (ptsEl) ptsEl.textContent = `\u{1F31F} ${totalPoints.toLocaleString()}P`;
      if (streakEl) streakEl.textContent = `\u{1F525} ${streak}\uC77C \uC5F0\uC18D`;
      if (classEl) classEl.textContent = `\uACBD\uD76C\uC911\uD559\uAD50 \uC62C\uBC14\uB978 \uB8E8\uD2F4`;
      const loggedIn = appState.isLoggedIn();
      const authLabelEl = document.querySelector("#btn-google-auth span");
      if (authLabelEl) authLabelEl.textContent = loggedIn ? appState.isTestAccount() ? "\uD14C\uC2A4\uD2B8 \uC885\uB8CC" : "\uB85C\uADF8\uC544\uC6C3" : "\uB85C\uADF8\uC778";
      ["header-points", "header-streak", "user-profile-chip", "btn-mode-toggle"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = loggedIn ? "" : "none";
      });
      const navMenu = document.querySelector(".nav-menu");
      if (navMenu) navMenu.style.visibility = loggedIn ? "" : "hidden";
      setChatbotEnabled(loggedIn);
      const testMark = appState.isTestAccount() ? "\u{1F9EA} " : "";
      if (userProfile.role === "teacher") {
        if (roleIconEl) roleIconEl.textContent = "\u{1F469}\u200D\u{1F3EB}";
        if (nameEl) nameEl.textContent = `${testMark}${userProfile.realName} (\uC120\uC0DD\uB2D8)`;
        if (modeBtn) {
          modeBtn.textContent = "\uD559\uC0DD \uBAA8\uB4DC\uB85C \uC804\uD658";
          modeBtn.classList.add("teacher-active");
        }
      } else {
        if (roleIconEl) roleIconEl.textContent = "\u{1F392}";
        if (nameEl) nameEl.textContent = `${testMark}${userProfile.nickname}`;
        if (modeBtn) {
          modeBtn.textContent = "\uAD50\uC0AC \uBAA8\uB4DC";
          modeBtn.classList.remove("teacher-active");
        }
      }
    }
    navigate(view) {
      this.currentView = view;
      document.querySelectorAll("[data-view]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.view === view);
      });
      const mainContainer = document.getElementById("main-content");
      if (!mainContainer) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (!appState.isLoggedIn()) {
        this.renderLoginGate(mainContainer);
        return;
      }
      switch (view) {
        case "home":
          this.renderHome(mainContainer);
          break;
        case "etiquette":
          this.renderEtiquette(mainContainer);
          break;
        case "typing":
          this.renderTyping(mainContainer);
          break;
        case "reading":
          this.renderReading(mainContainer);
          break;
        case "badges":
          this.renderBadges(mainContainer);
          break;
        case "teacher":
          if (appState.isVerifiedTeacher()) {
            this.renderTeacher(mainContainer);
          } else {
            this.renderTeacherLocked(mainContainer);
          }
          break;
      }
    }
    // ================= HOME VIEW =================
    renderHome(container) {
      const stats = appState.getClassStats();
      const rankedStudents = appState.getRankedStudents(this.leaderboardCategory, this.leaderboardScope);
      const top3 = rankedStudents.slice(0, 3);
      const others4to20 = rankedStudents.slice(3, 20);
      const getScoreDisplay = (student) => {
        if (this.leaderboardCategory === "manners") return `${student.mannersScore}P`;
        if (this.leaderboardCategory === "typing") return `${student.typingBestCPM}\uD0C0 (${student.typingScore}P)`;
        if (this.leaderboardCategory === "reading") return `${student.readingScore}P`;
        return `${student.totalPoints.toLocaleString()}P`;
      };
      const scopeLabel = this.leaderboardScope === "class" ? "2\uD559\uB144 3\uBC18" : this.leaderboardScope === "grade" ? "2\uD559\uB144 \uC804\uCCB4" : "\uC804\uAD50\uC0DD";
      container.innerHTML = `
      <section class="hero-section">
        <div class="hero-pill-tag">
          <span>\u2728</span> \uACBD\uD76C\uC911\uD559\uAD50 \xB7 \uB9E4\uC77C 5\uBD84 \uC62C\uBC14\uB978 \uB8E8\uD2F4
        </div>
        <h1 class="hero-title">
          \uBC14\uB978 \uC608\uC808, \uD55C\uCEF4\uD0C0\uC790, \uB3C5\uC11C\uAE30\uB85D\uC73C\uB85C<br>
          <span class="highlight-gradient">\uD3B8\uC548\uD558\uACE0 \uD488\uACA9 \uC788\uB294 \uC911\uD559 \uC0DD\uD65C</span>
        </h1>
        <p class="hero-desc">
          \uB514\uBC97\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uB9E4\uC77C 5\uBD84! \uC544\uCE68 \uC2DC\uAC04\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC26C\uB294 \uC2DC\uAC04\xB7\uC810\uC2EC\uC2DC\uAC04 \uB4F1 <strong>\uC9EC\uB0A0 \uB54C\uB9C8\uB2E4</strong> \uB4E4\uC5B4\uC640\uC11C \uD65C\uB3D9\uD574 \uBCF4\uC138\uC694. 5\uB300 \uD559\uAD50\uC0DD\uD65C \uD575\uC2EC \uC608\uC808 \uAC1C\uBCC4 \uC2E4\uCC9C, \uD55C\uCEF4\uD0C0\uC790 4\uB2E8\uACC4, \uC911\uD559\uC0DD \uCD94\uCC9C\uB3C4\uC11C \uB3C5\uC11C\uAE30\uB85D\uC73C\uB85C \uC131\uC7A5 \uD3EC\uC778\uD2B8\uB97C \uBAA8\uC544\uBCF4\uC138\uC694.
        </p>

        <!-- Hero Quick Check Card -->
        <div class="hero-visual-wrapper">
          <div class="hero-floating-card">
            <div class="floating-card-header">
              <div class="floating-card-title">
                <span>\u{1F4CB}</span> \uC624\uB298 \uC544\uCE68 \uB098\uC758 \uC608\uC808 \uC2E4\uCC9C \uD604\uD669
              </div>
              <span class="badge badge-green">\uC9C0\uCE68\uB2F9 +5P</span>
            </div>
            <div class="quick-task-list">
              ${ETIQUETTE_DOMAINS.map((d) => {
        const checkedCount = d.guidelines.filter((g) => !!appState.state.todaySubChecked[g.id]).length;
        const isAllDone = checkedCount === 4;
        return `
                  <div class="quick-task-item ${isAllDone ? "done" : ""}" data-nav-domain="${d.id}">
                    <div class="quick-task-left">
                      <span class="quick-task-icon">${d.icon}</span>
                      <span>${d.title}</span>
                    </div>
                    <span class="badge ${isAllDone ? "badge-green" : "badge-orange"}">
                      ${checkedCount}/4 \uC644\uB8CC (${checkedCount * 5}P)
                    </span>
                  </div>
                `;
      }).join("")}
            </div>

            <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem;">
              <button class="btn btn-primary" style="flex: 1;" id="btn-quick-typing">
                \u2328\uFE0F \uD55C\uCEF4\uD0C0\uC790 \uC2DC\uC791
              </button>
              <button class="btn btn-secondary" style="flex: 1;" id="btn-quick-reading">
                \u{1F4DA} \uB3C5\uC11C\uAE30\uB85D \uC791\uC131
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 3-Tier Multi-Scope & 3-Category Leaderboard (Top 20) -->
      <section class="leaderboard-section">
        <div class="leaderboard-header">
          <span class="hero-pill-tag">Live Motion Hall of Fame</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em;">
            \u{1F3C6} \uC2E4\uC2DC\uAC04 \uBA85\uC608\uC758 \uC804\uB2F9 (1\uC704~20\uC704)
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem;">
            \uD604\uC7AC \uBC94\uC704: <strong>${scopeLabel}</strong> | ${appState.state.userProfile.role === "teacher" ? "\uAD50\uC0AC \uD654\uBA74 (\uC2E4\uBA85+\uB2C9\uB124\uC784 \uBCD1\uAE30)" : "\uD559\uC0DD \uD654\uBA74 (\uB2C9\uB124\uC784\uB9CC \uD45C\uC2DC)"}
          </p>

          <!-- Scope Selector (\uD559\uAE09 / \uD559\uB144 / \uC804\uAD50\uC0DD) -->
          <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 1.25rem;">
            <button class="btn ${this.leaderboardScope === "class" ? "btn-primary" : "btn-secondary"} btn-scope" data-scope="class" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              \u{1F3EB} \uD559\uAE09\uBCC4
            </button>
            <button class="btn ${this.leaderboardScope === "grade" ? "btn-primary" : "btn-secondary"} btn-scope" data-scope="grade" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              \u{1F393} \uD559\uB144\uBCC4
            </button>
            <button class="btn ${this.leaderboardScope === "school" ? "btn-primary" : "btn-secondary"} btn-scope" data-scope="school" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              \u{1F310} \uC804\uAD50\uC0DD
            </button>
          </div>

          <!-- Category Selector -->
          <div class="category-nav-pills">
            <button class="category-pill-btn ${this.leaderboardCategory === "total" ? "active" : ""}" data-cat="total">
              \u{1F31F} \uD1B5\uD569 \uC131\uC7A5 \uC21C\uC704
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === "manners" ? "active" : ""}" data-cat="manners">
              \u{1F338} \uC608\uC808 \uC810\uC218 \uC21C\uC704
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === "typing" ? "active" : ""}" data-cat="typing">
              \u2328\uFE0F \uD0C0\uC790 \uC810\uC218 \uC21C\uC704
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === "reading" ? "active" : ""}" data-cat="reading">
              \u{1F4DA} \uB3C5\uC11C\uAE30\uB85D \uC21C\uC704
            </button>
          </div>
        </div>

        <!-- 1st, 2nd, 3rd Podium Graphic -->
        <div class="podium-container">
          <!-- 2nd Place Silver -->
          <div class="podium-card podium-2nd">
            <div class="podium-rank-badge">\u{1F948}</div>
            <div class="podium-student-name">${appState.formatStudentName(top3[1])}</div>
            <div class="podium-student-sub">${top3[1].grade || 2}\uD559\uB144 ${top3[1].classNum || 3}\uBC18 ${top3[1].number}\uBC88</div>
            <div class="podium-score-pill" style="background: #F1F5F9; color: #475569;">
              ${getScoreDisplay(top3[1])}
            </div>
            <div class="podium-quote">"${top3[1].comment || "\uD568\uAED8 \uC131\uC7A5\uD574\uC694!"}"</div>
          </div>

          <!-- 1st Place Gold -->
          <div class="podium-card podium-1st">
            <div class="podium-rank-badge">\u{1F451}</div>
            <div style="font-size: 0.8rem; font-weight: 800; color: #D97706; text-transform: uppercase; margin-bottom: 0.2rem;">
              \u{1F947} 1st Place Champion
            </div>
            <div class="podium-student-name" style="font-size: 1.45rem;">
              ${appState.formatStudentName(top3[0])}
            </div>
            <div class="podium-student-sub">${top3[0].grade || 2}\uD559\uB144 ${top3[0].classNum || 3}\uBC18 ${top3[0].number}\uBC88</div>
            <div class="podium-score-pill" style="background: #FEF3C7; color: #B45309;">
              \u{1F31F} ${getScoreDisplay(top3[0])}
            </div>
            <div class="podium-quote">"${top3[0].comment || "\uC544\uCE68\uC744 \uC131\uC2E4\uD788 \uCC44\uC6C1\uB2C8\uB2E4."}"</div>
          </div>

          <!-- 3rd Place Bronze -->
          <div class="podium-card podium-3rd">
            <div class="podium-rank-badge">\u{1F949}</div>
            <div class="podium-student-name">${appState.formatStudentName(top3[2])}</div>
            <div class="podium-student-sub">${top3[2].grade || 2}\uD559\uB144 ${top3[2].classNum || 3}\uBC18 ${top3[2].number}\uBC88</div>
            <div class="podium-score-pill" style="background: #FFEDD5; color: #C2410C;">
              ${getScoreDisplay(top3[2])}
            </div>
            <div class="podium-quote">"${top3[2].comment || "\uC624\uB298\uB3C4 \uD30C\uC774\uD305!"}"</div>
          </div>
        </div>

        <!-- 4th ~ 20th Moving Graphic Ticker -->
        <div class="ticker-card-container">
          <div class="ticker-header">
            <div style="font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>\u{1F3C3}</span> 4\uC704 ~ 20\uC704 \uC2E4\uC2DC\uAC04 \uC131\uC7A5 \uB7EC\uB108\uC2A4 (${scopeLabel})
            </div>
            <button class="btn btn-secondary" id="btn-toggle-rank-view" style="font-size: 0.8rem; padding: 0.35rem 0.85rem;">
              ${this.showAllRanks ? "\u25C0 \uD2F0\uCEE4 \uBAA8\uB4DC\uB85C \uBCF4\uAE30" : "\uACA9\uC790 \uC804\uCCB4 \uBAA9\uB85D \uBCF4\uAE30 \u25B6"}
            </button>
          </div>

          ${!this.showAllRanks ? `
            <div class="ticker-track-wrapper">
              <div class="ticker-scroll-row">
                ${[...others4to20, ...others4to20].map((s, idx) => `
                  <div class="ticker-student-chip">
                    <div class="ticker-rank-pill">${idx % others4to20.length + 4}\uC704</div>
                    <div>
                      <div class="ticker-name">${appState.formatStudentName(s)}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${s.grade || 2}-${s.classNum || 3} ${s.number}\uBC88</div>
                    </div>
                    <div class="ticker-score">${getScoreDisplay(s)}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : `
            <div class="rank-grid-4to20">
              ${others4to20.map((s, idx) => `
                <div class="rank-row-item">
                  <div style="display: flex; align-items: center; gap: 0.65rem;">
                    <span class="ticker-rank-pill" style="width:24px; height:24px; font-size:0.7rem;">${idx + 4}</span>
                    <span style="font-weight: 700; font-size: 0.875rem;">${appState.formatStudentName(s)}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">(${s.grade || 2}-${s.classNum || 3})</span>
                  </div>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--color-amber);">${getScoreDisplay(s)}</span>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      </section>
    `;
      container.querySelectorAll(".btn-scope").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.leaderboardScope = e.currentTarget.dataset.scope;
          this.renderHome(container);
        });
      });
      container.querySelectorAll(".category-pill-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.leaderboardCategory = e.currentTarget.dataset.cat;
          this.renderHome(container);
        });
      });
      const btnToggle = container.querySelector("#btn-toggle-rank-view");
      if (btnToggle) {
        btnToggle.addEventListener("click", () => {
          sounds.playClick();
          this.showAllRanks = !this.showAllRanks;
          this.renderHome(container);
        });
      }
      container.querySelectorAll("[data-nav-domain]").forEach((el) => {
        el.addEventListener("click", () => {
          sounds.playClick();
          this.navigate("etiquette");
        });
      });
      const btnQuickTyping = container.querySelector("#btn-quick-typing");
      if (btnQuickTyping) {
        btnQuickTyping.addEventListener("click", () => {
          sounds.playClick();
          this.navigate("typing");
        });
      }
      const btnQuickReading = container.querySelector("#btn-quick-reading");
      if (btnQuickReading) {
        btnQuickReading.addEventListener("click", () => {
          sounds.playClick();
          this.navigate("reading");
        });
      }
    }
    // ================= ETIQUETTE & QUIZ VIEW (4 INDIVIDUAL CHECKBOXES) =================
    renderEtiquette(container) {
      const activeDomain = ETIQUETTE_DOMAINS[this.currentDomainIndex % ETIQUETTE_DOMAINS.length];
      const quiz = MIDDLE_SCHOOL_QUIZZES[this.currentQuizIndex % MIDDLE_SCHOOL_QUIZZES.length];
      container.innerHTML = `
      <div class="etiquette-hub-container">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
          <span class="hero-pill-tag">Middle School Etiquette Guidelines</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            \uC911\uD559\uAD50 5\uB300 \uD559\uAD50\uC0DD\uD65C \uC608\uC808 \uAD50\uC721 & \uAC1C\uBCC4 \uC2E4\uCC9C
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            \uC9C0\uCE68\uC744 \uAF3C\uAF3C\uD788 \uC77D\uACE0 <strong>4\uAC1C \uC138\uBD80 \uC9C0\uCE68 \uAC01\uAC01\uC744 \uC9C1\uC811 \uCCB4\uD06C</strong>\uD558\uC5EC \uC2E4\uCC9C\uD574 \uBCF4\uC138\uC694 (+5P\uC529 \uCD1D +20P).
          </p>
        </div>

        <!-- 5 Domain Navigation Pills -->
        <div class="etiquette-domain-nav">
          ${ETIQUETTE_DOMAINS.map((dom, idx) => `
            <button class="domain-pill-btn ${idx === this.currentDomainIndex ? "active" : ""}" data-domain-index="${idx}">
              <span>${dom.icon}</span>
              <span>${dom.title}</span>
            </button>
          `).join("")}
        </div>

        <!-- Active Domain Educational Card with 4 Individual Checkboxes -->
        <div class="domain-guide-card">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-light); padding-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 2.2rem;">${activeDomain.icon}</span>
              <div>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">${activeDomain.title} 4\uB300 \uD575\uC2EC \uC9C0\uCE68</h3>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${activeDomain.badge} Guidelines</span>
              </div>
            </div>
            <span class="badge badge-purple" style="font-size: 0.85rem;">\uAC01 \uD56D\uBAA9\uB2F9 +5P</span>
          </div>

          <!-- 4 Detailed Rules with Individual Checkboxes -->
          <div class="domain-rules-grid">
            ${activeDomain.guidelines.map((g, idx) => {
        const isChecked = !!appState.state.todaySubChecked[g.id];
        return `
                <div class="rule-box ${isChecked ? "rule-box-done" : ""}" style="border-left-color: ${activeDomain.color}; background: ${isChecked ? "#F0FDF4" : "var(--bg-subtle)"}; cursor: pointer;" data-sub-rule-id="${g.id}">
                  <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                    <input type="checkbox" ${isChecked ? "checked" : ""} style="width: 20px; height: 20px; margin-top: 2px; accent-color: #059669; pointer-events: none;">
                    <div style="flex: 1;">
                      <div class="rule-title" style="${isChecked ? "color: #065F46; text-decoration: line-through;" : ""}">
                        <span>${idx + 1}.</span> ${g.rule}
                      </div>
                      <div class="rule-desc" style="${isChecked ? "color: #047857;" : ""}">${g.desc}</div>
                      <div style="margin-top: 0.5rem;">
                        <span class="badge ${isChecked ? "badge-green" : "badge-gray"}">
                          ${isChecked ? "\u2713 \uC2E4\uCC9C \uC644\uB8CC (+5P)" : "\uD074\uB9AD\uD558\uC5EC \uC2E4\uCC9C \uCCB4\uD06C (+5P)"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              `;
      }).join("")}
          </div>
          ${(() => {
        const approvedProps = (appState.state.teacherProposals || []).filter((p) => p.domainId === activeDomain.id && (p.status === "approved" || p.votes.length / p.totalTeachers >= 0.7));
        if (approvedProps.length === 0) return "";
        return `
              <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 2px dashed #CBD5E1;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
                  <div style="font-weight: 800; font-size: 1.05rem; color: #1E293B; display: flex; align-items: center; gap: 0.5rem;">
                    <span>\u{1F3DB}\uFE0F</span> \uC120\uC0DD\uB2D8 70% \uACF5\uAC10 \uACF5\uC2DD \uCC44\uD0DD \uC9C0\uCE68 (\uAC8C\uC2DC\uB428)
                  </div>
                  <span class="badge badge-green">\uAD50\uC0AC 70% \uC774\uC0C1 \uACF5\uAC10 \uD1B5\uACFC</span>
                </div>
                <div class="domain-rules-grid">
                  ${approvedProps.map((ap, idx) => {
          const isChecked = !!appState.state.todaySubChecked[ap.id];
          return `
                      <div class="rule-box ${isChecked ? "rule-box-done" : ""}" style="border-left-color: #10B981; background: ${isChecked ? "#F0FDF4" : "#F8FAFC"}; cursor: pointer;" data-sub-rule-id="${ap.id}">
                        <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                          <input type="checkbox" ${isChecked ? "checked" : ""} style="width: 20px; height: 20px; margin-top: 2px; accent-color: #059669; pointer-events: none;">
                          <div style="flex: 1;">
                            <div class="rule-title" style="${isChecked ? "color: #065F46; text-decoration: line-through;" : ""}">
                              <span>[\uACF5\uC2DD\uCC44\uD0DD]</span> ${ap.rule}
                            </div>
                            <div class="rule-desc" style="${isChecked ? "color: #047857;" : ""}">${ap.desc} <span style="font-size: 0.75rem; color: var(--text-muted);">(\uC81C\uC548: ${ap.proposer})</span></div>
                            <div style="margin-top: 0.5rem;">
                              <span class="badge ${isChecked ? "badge-green" : "badge-gray"}">
                                ${isChecked ? "\u2713 \uC2E4\uCC9C \uC644\uB8CC (+5P)" : "\uD074\uB9AD\uD558\uC5EC \uC2E4\uCC9C \uCCB4\uD06C (+5P)"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    `;
        }).join("")}
                </div>
              </div>
            `;
      })()}
        </div>

        <!-- Middle School Situation Quiz -->
        <div class="card" style="margin-top: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.5rem;">\u{1F4A1}</span>
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 800;">\uC911\uD559 \uC608\uC808 \uC0C1\uD669\uBCC4 \uC2E4\uC804 \uD034\uC988</h3>
                <span class="badge badge-purple">${quiz.category}</span>
              </div>
            </div>
            <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-amber);">
              \uC815\uB2F5 \uB9DE\uCD9C \uC2DC +${quiz.points}P \uC801\uB9BD
            </span>
          </div>

          <div style="background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border-light);">
            <div style="font-size: 1.15rem; font-weight: 700; line-height: 1.6; color: var(--text-primary);">
              Q. ${quiz.question}
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${quiz.options.map((opt, idx) => `
              <button class="btn btn-secondary quiz-opt-btn" data-opt-idx="${idx}" style="width: 100%; text-align: left; justify-content: flex-start; padding: 0.85rem 1.2rem; font-size: 0.925rem; border-radius: var(--radius-md);">
                <span style="display: inline-block; width: 26px; height: 26px; border-radius: 50%; background: var(--bg-subtle); text-align: center; line-height: 26px; font-weight: 700; margin-right: 0.75rem; font-size: 0.8rem;">
                  ${idx + 1}
                </span>
                ${opt}
              </button>
            `).join("")}
          </div>

          <div id="quiz-result-feedback" style="display: none; margin-top: 1.25rem; padding: 1.25rem; border-radius: var(--radius-md);"></div>

          <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem; border-top: 1px solid var(--border-light); padding-top: 1rem;">
            <button class="btn btn-secondary" id="btn-next-situation-quiz">
              \uB2E4\uC74C \uD034\uC988 \uD480\uAE30 \u27A1\uFE0F
            </button>
          </div>
        </div>
      </div>
    `;
      container.querySelectorAll(".domain-pill-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.currentDomainIndex = parseInt(e.currentTarget.dataset.domainIndex, 10);
          this.renderEtiquette(container);
        });
      });
      container.querySelectorAll("[data-sub-rule-id]").forEach((box) => {
        box.addEventListener("click", () => {
          const id = box.dataset.subRuleId;
          sounds.playClick();
          const checked = appState.toggleSubRule(id, 5);
          if (checked) {
            sounds.playSuccess();
            triggerConfetti();
            showToast("\uC138\uBD80 \uC9C0\uCE68 \uC2E4\uCC9C \uC644\uB8CC! +5P \uC801\uB9BD", "\u{1F338}");
          }
          this.renderEtiquette(container);
        });
      });
      const feedbackEl = container.querySelector("#quiz-result-feedback");
      container.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const selIdx = parseInt(e.currentTarget.dataset.optIdx, 10);
          const isCorrect = selIdx === quiz.answer;
          container.querySelectorAll(".quiz-opt-btn").forEach((b, idx) => {
            b.disabled = true;
            if (idx === quiz.answer) {
              b.style.background = "#ECFDF5";
              b.style.borderColor = "#10B981";
              b.style.color = "#065F46";
            } else if (idx === selIdx) {
              b.style.background = "#FEF2F2";
              b.style.borderColor = "#EF4444";
              b.style.color = "#991B1B";
            }
          });
          if (isCorrect) {
            sounds.playCelebration();
            triggerConfetti();
            appState.completeQuiz(quiz.points);
            feedbackEl.style.display = "block";
            feedbackEl.style.background = "#ECFDF5";
            feedbackEl.style.border = "1px solid #A7F3D0";
            feedbackEl.innerHTML = `
            <div style="font-weight: 800; color: #065F46; margin-bottom: 0.35rem;">\u{1F389} \uC815\uB2F5\uC785\uB2C8\uB2E4! (+${quiz.points}P \uC608\uC808 \uC810\uC218 \uC801\uB9BD)</div>
            <div style="font-size: 0.875rem; color: #047857; line-height: 1.55;">${quiz.explanation}</div>
          `;
            showToast(`\uC815\uB2F5! +${quiz.points}P \uD68D\uB4DD`, "\u{1F31F}");
          } else {
            sounds.playError();
            feedbackEl.style.display = "block";
            feedbackEl.style.background = "#FEF2F2";
            feedbackEl.style.border = "1px solid #FECACA";
            feedbackEl.innerHTML = `
            <div style="font-weight: 800; color: #991B1B; margin-bottom: 0.35rem;">\uC544\uC27D\uAC8C\uB3C4 \uC624\uB2F5\uC785\uB2C8\uB2E4. \uD574\uC124\uC744 \uD655\uC778\uD574 \uBCF4\uC138\uC694!</div>
            <div style="font-size: 0.875rem; color: #7F1D1D; line-height: 1.55;">${quiz.explanation}</div>
          `;
          }
        });
      });
      const btnNext = container.querySelector("#btn-next-situation-quiz");
      if (btnNext) {
        btnNext.addEventListener("click", () => {
          sounds.playClick();
          this.currentQuizIndex = (this.currentQuizIndex + 1) % MIDDLE_SCHOOL_QUIZZES.length;
          this.renderEtiquette(container);
        });
      }
    }
    // ================= TYPING PRACTICE VIEW (VISIBLE INPUT ENGINE) =================
    renderTyping(container) {
      container.innerHTML = `
      <div class="typing-container">
        <!-- 4-Stage Tab Bar -->
        <div class="typing-stage-tabs">
          <button class="stage-tab-btn ${this.typingMode === "key" ? "active" : ""}" data-mode="key">
            <span>\u{1F3AF}</span> 1\uB2E8\uACC4: \uC790\uB9AC \uC5F0\uC2B5
          </button>
          <button class="stage-tab-btn ${this.typingMode === "word" ? "active" : ""}" data-mode="word">
            <span>\u{1F4DD}</span> 2\uB2E8\uACC4: \uB0B1\uB9D0 \uC5F0\uC2B5
          </button>
          <button class="stage-tab-btn ${this.typingMode === "short" ? "active" : ""}" data-mode="short">
            <span>\u2728</span> 3\uB2E8\uACC4: \uC9E7\uC740 \uAE00 \uC5F0\uC2B5
          </button>
          <button class="stage-tab-btn ${this.typingMode === "long" ? "active" : ""}" data-mode="long">
            <span>\u{1F4D6}</span> 4\uB2E8\uACC4: \uAE34 \uAE00 \uC5F0\uC2B5
          </button>
        </div>

        <div id="typing-stage-content"></div>
      </div>
    `;
      container.querySelectorAll(".stage-tab-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.typingMode = e.currentTarget.dataset.mode;
          this.renderTyping(container);
        });
      });
      const stageContent = container.querySelector("#typing-stage-content");
      if (this.typingMode === "key") {
        this.renderKeyPracticeMode(stageContent);
      } else if (this.typingMode === "word") {
        this.renderWordPracticeMode(stageContent);
      } else if (this.typingMode === "short") {
        this.renderShortPracticeMode(stageContent);
      } else if (this.typingMode === "long") {
        this.renderLongPracticeMode(stageContent);
      }
    }
    // --- 1. 자리 연습 ---
    renderKeyPracticeMode(container) {
      const stage = HANCOM_KEY_STAGES[this.keyStageIndex % HANCOM_KEY_STAGES.length];
      container.innerHTML = `
      <div class="substage-pills">
        ${HANCOM_KEY_STAGES.map((s, idx) => `
          <button class="substage-pill ${idx === this.keyStageIndex ? "active" : ""}" data-stage-idx="${idx}">
            ${s.name}
          </button>
        `).join("")}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">\uD604\uC7AC \uD0C0\uC218</div>
            <div class="hud-value" id="key-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC815\uD655\uB3C4</div>
            <div class="hud-value" id="key-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC9C4\uD589\uB3C4</div>
            <div class="hud-value" id="key-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC190\uAC00\uB77D \uC548\uB0B4</div>
            <div class="hud-value" id="key-hud-finger" style="font-size: 1.15rem; color: #3B82F6;">
              ${stage.keys[0]}
            </div>
          </div>
        </div>

        <div class="key-practice-arena">
          <div class="key-spotlight-display">
            <div class="key-big-bubble" id="key-big-bubble">${stage.keys[0]}</div>
            <div class="key-finger-guide-badge" id="key-finger-badge">
              <span>\u{1F449}</span> \uCD94\uCC9C \uC190\uAC00\uB77D: <strong>\uC67C\uC190 \uC0C8\uB07C</strong>
            </div>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            \u2328\uFE0F \uD0A4\uBCF4\uB4DC\uC758 \uD574\uB2F9 \uAE00\uC1E0\uB97C \uB204\uB974\uBA74 \uC989\uC2DC \uB2E4\uC74C \uC790\uB9AC\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4.
          </div>
          <button class="btn btn-secondary" id="btn-restart-key">\u{1F504} \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC5F0\uC2B5</button>
        </div>
      </div>

      <div class="keyboard-guide-card">
        <div class="keyboard-guide-header">
          <div style="font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>\u2328\uFE0F</span> \uAC00\uC0C1 \uD0A4\uBCF4\uB4DC \uAC00\uC774\uB4DC (\uC790\uB9AC \uD655\uC778)
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">\uB179\uC0C9\uC73C\uB85C \uBE5B\uB098\uB294 \uD0A4\uB97C \uB204\uB974\uC138\uC694.</span>
        </div>
        <div class="keyboard-layout" id="key-visual-layout">
          ${this.renderVisualKeyboardHtml()}
        </div>
      </div>
    `;
      const bubble = container.querySelector("#key-big-bubble");
      const badge = container.querySelector("#key-finger-badge");
      const hudCpm = container.querySelector("#key-hud-cpm");
      const hudAcc = container.querySelector("#key-hud-acc");
      const hudProg = container.querySelector("#key-hud-prog");
      const hudFinger = container.querySelector("#key-hud-finger");
      this.keySession = new KeyPracticeSession(
        stage,
        (status) => {
          bubble.textContent = status.currentKey || "\u2713";
          badge.innerHTML = `<span>\u{1F449}</span> \uCD94\uCC9C \uC190\uAC00\uB77D: <strong>${status.fingerGuide}</strong>`;
          hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
          hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
          hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;
          hudFinger.textContent = status.fingerGuide;
          bubble.classList.remove("flash-green", "flash-red");
          void bubble.offsetWidth;
          bubble.classList.add(status.lastMatch ? "flash-green" : "flash-red");
          this.highlightKeyboardKey(status.currentKey);
        },
        (finalStatus) => {
          sounds.playCelebration();
          triggerConfetti();
          const earned = Math.round(finalStatus.cpm / 10 + 20);
          appState.addTypingScore(earned, finalStatus.cpm, finalStatus.accuracy);
          showToast(`\uC790\uB9AC \uC5F0\uC2B5 \uC644\uB8CC! +${earned}P \uC801\uB9BD (\uD0C0\uC218: ${finalStatus.cpm} CPM)`, "\u{1F3AF}");
        }
      );
      this.highlightKeyboardKey(stage.keys[0]);
      const keyHandler = (e) => {
        if (this.typingMode !== "key") return;
        if (["Shift", "Control", "Alt", "Meta", "Tab"].includes(e.key)) return;
        e.preventDefault();
        sounds.playKeyTick();
        const matched = this.keySession.handleKeyDown(e);
        if (!matched) sounds.playError();
      };
      window.removeEventListener("keydown", this._keyHandler);
      this._keyHandler = keyHandler;
      window.addEventListener("keydown", this._keyHandler);
      container.querySelectorAll(".substage-pill").forEach((pill) => {
        pill.addEventListener("click", (e) => {
          sounds.playClick();
          this.keyStageIndex = parseInt(e.currentTarget.dataset.stageIdx, 10);
          this.renderKeyPracticeMode(container);
        });
      });
      const btnRestart = container.querySelector("#btn-restart-key");
      if (btnRestart) {
        btnRestart.addEventListener("click", () => {
          sounds.playClick();
          this.keySession.reset();
        });
      }
    }
    highlightKeyboardKey(targetKey) {
      document.querySelectorAll("#key-visual-layout .kb-key").forEach((k) => {
        k.classList.toggle("target-glow", k.dataset.keyChar === targetKey);
      });
    }
    renderVisualKeyboardHtml() {
      return `
      <div class="kb-row">
        <div class="kb-key" data-key-char="1">1</div>
        <div class="kb-key" data-key-char="2">2</div>
        <div class="kb-key" data-key-char="3">3</div>
        <div class="kb-key" data-key-char="4">4</div>
        <div class="kb-key" data-key-char="5">5</div>
        <div class="kb-key" data-key-char="6">6</div>
        <div class="kb-key" data-key-char="7">7</div>
        <div class="kb-key" data-key-char="8">8</div>
        <div class="kb-key" data-key-char="9">9</div>
        <div class="kb-key" data-key-char="0">0</div>
      </div>
      <div class="kb-row">
        <div class="kb-key" data-key-char="\u3142">\u3142<span class="kb-sub">Q</span></div>
        <div class="kb-key" data-key-char="\u3148">\u3148<span class="kb-sub">W</span></div>
        <div class="kb-key" data-key-char="\u3137">\u3137<span class="kb-sub">E</span></div>
        <div class="kb-key" data-key-char="\u3131">\u3131<span class="kb-sub">R</span></div>
        <div class="kb-key" data-key-char="\u3145">\u3145<span class="kb-sub">T</span></div>
        <div class="kb-key" data-key-char="\u315B">\u315B<span class="kb-sub">Y</span></div>
        <div class="kb-key" data-key-char="\u3155">\u3155<span class="kb-sub">U</span></div>
        <div class="kb-key" data-key-char="\u3151">\u3151<span class="kb-sub">I</span></div>
        <div class="kb-key" data-key-char="\u3150">\u3150<span class="kb-sub">O</span></div>
        <div class="kb-key" data-key-char="\u3154">\u3154<span class="kb-sub">P</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key home-row" data-key-char="\u3141">\u3141<span class="kb-sub">A</span></div>
        <div class="kb-key home-row" data-key-char="\u3134">\u3134<span class="kb-sub">S</span></div>
        <div class="kb-key home-row" data-key-char="\u3147">\u3147<span class="kb-sub">D</span></div>
        <div class="kb-key home-row" data-key-char="\u3139">\u3139<span class="kb-sub">F</span></div>
        <div class="kb-key home-row" data-key-char="\u314E">\u314E<span class="kb-sub">G</span></div>
        <div class="kb-key home-row" data-key-char="\u3157">\u3157<span class="kb-sub">H</span></div>
        <div class="kb-key home-row" data-key-char="\u3153">\u3153<span class="kb-sub">J</span></div>
        <div class="kb-key home-row" data-key-char="\u314F">\u314F<span class="kb-sub">K</span></div>
        <div class="kb-key home-row" data-key-char="\u3163">\u3163<span class="kb-sub">L</span></div>
        <div class="kb-key home-row" data-key-char=";">;<span class="kb-sub">:</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key" data-key-char="\u314B">\u314B<span class="kb-sub">Z</span></div>
        <div class="kb-key" data-key-char="\u314C">\u314C<span class="kb-sub">X</span></div>
        <div class="kb-key" data-key-char="\u314A">\u314A<span class="kb-sub">C</span></div>
        <div class="kb-key" data-key-char="\u314D">\u314D<span class="kb-sub">V</span></div>
        <div class="kb-key" data-key-char="\u3160">\u3160<span class="kb-sub">B</span></div>
        <div class="kb-key" data-key-char="\u315C">\u315C<span class="kb-sub">N</span></div>
        <div class="kb-key" data-key-char="\u3161">\u3161<span class="kb-sub">M</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key space" data-key-char=" ">\uC2A4\uD398\uC774\uC2A4\uBC14 (Space)</div>
      </div>
    `;
    }
    // --- 2. 낱말 연습 ---
    renderWordPracticeMode(container) {
      let wordIdx = 0;
      const words = WORD_PRACTICE_LIST;
      let score = 0;
      container.innerHTML = `
      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">\uC644\uB8CC \uB0B1\uB9D0 \uC218</div>
            <div class="hud-value" id="word-hud-count">0<span class="hud-unit">\uAC1C</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uD604\uC7AC \uBAA9\uD45C \uB0B1\uB9D0</div>
            <div class="hud-value" id="word-target-bubble" style="font-size: 2rem; color: #4F46E5;">
              ${words[0]}
            </div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uD68D\uB4DD \uD3EC\uC778\uD2B8</div>
            <div class="hud-value" id="word-hud-points">0<span class="hud-unit">P</span></div>
          </div>
        </div>

        <div style="max-width: 460px; margin: 2rem auto; text-align: center;">
          <input type="text" id="word-input" class="hancom-real-input" placeholder="\uB0B1\uB9D0 \uC785\uB825 \uD6C4 Space \uB610\uB294 Enter" style="text-align: center;" autofocus>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.75rem;">
            \u{1F4A1} \uC2A4\uD398\uC774\uC2A4\uBC14(Space)\uB098 \uC5D4\uD130(Enter)\uB97C \uB204\uB974\uBA74 \uB2E4\uC74C \uB0B1\uB9D0\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4.
          </div>
        </div>
      </div>
    `;
      const wordInput = container.querySelector("#word-input");
      const wordBubble = container.querySelector("#word-target-bubble");
      const countEl = container.querySelector("#word-hud-count");
      const ptsEl = container.querySelector("#word-hud-points");
      wordInput.addEventListener("keydown", (e) => {
        sounds.playKeyTick();
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          const typed = wordInput.value.trim();
          const currentTarget = words[wordIdx];
          if (typed === currentTarget) {
            sounds.playSuccess();
            score += 5;
            wordIdx = (wordIdx + 1) % words.length;
            wordInput.value = "";
            wordBubble.textContent = words[wordIdx];
            countEl.innerHTML = `${wordIdx}<span class="hud-unit">\uAC1C</span>`;
            ptsEl.innerHTML = `${score}<span class="hud-unit">P</span>`;
            appState.addTypingScore(5, 300, 100);
            showToast(`\uB0B1\uB9D0 \uC644\uC131! +5P \uC801\uB9BD`, "\u2728");
          } else {
            sounds.playError();
            wordInput.style.borderColor = "#EF4444";
            setTimeout(() => {
              wordInput.style.borderColor = "#3B82F6";
            }, 400);
          }
        }
      });
    }
    // --- 3. 짧은 글 연습 (보이는 입력창 한컴타자 공식 스타일) ---
    renderShortPracticeMode(container) {
      const list = SHORT_SENTENCES;
      const current = list[this.sentenceIndex % list.length];
      container.innerHTML = `
      <div class="substage-pills">
        ${list.map((item, idx) => `
          <button class="substage-pill ${idx === this.sentenceIndex ? "active" : ""}" data-sentence-idx="${idx}">
            ${idx + 1}. \u300A${item.book}\u300B
          </button>
        `).join("")}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">\uD604\uC7AC \uD0C0\uC218</div>
            <div class="hud-value" id="st-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC815\uD655\uB3C4</div>
            <div class="hud-value" id="st-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uACBD\uACFC \uC2DC\uAC04</div>
            <div class="hud-value" id="st-hud-time">00:00</div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC9C4\uD589\uB3C4</div>
            <div class="hud-value" id="st-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
        </div>

        <div style="font-size: 0.9rem; font-weight: 700; color: #4F46E5; margin-bottom: 0.75rem;">
          \uCD9C\uCC98: \u300A${current.book}\u300B \u2014 ${current.author}
        </div>

        <!-- Hancom Taja Official Web Layout -->
        <div class="hancom-typing-layout">
          <!-- Target Sentence Box (Highlighted above) -->
          <div class="hancom-target-box" id="st-target-display">
            ${this.renderTargetCharHighlights(current.text, "")}
          </div>

          <!-- Real Visible Input Box Below -->
          <input type="text" class="hancom-real-input" id="st-visible-input" 
                 placeholder="\uC704 \uBB38\uC7A5\uC744 \uBCF4\uACE0 \uC5EC\uAE30\uC5D0 \uC785\uB825\uD558\uC138\uC694 (\uC644\uB8CC \uC2DC Enter\uB97C \uB204\uB974\uBA74 \uB2E4\uC74C \uBB38\uC7A5\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4)" 
                 autocomplete="off" spellcheck="false" autofocus>

          <div class="typing-progress-bar">
            <div class="typing-progress-fill" id="st-progress-fill"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
          <button class="btn btn-secondary" id="btn-restart-short">\u{1F504} \uB2E4\uC2DC \uCE58\uAE30</button>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            \u2328\uFE0F \uC9C1\uC811 \uBCF4\uC774\uB294 \uC785\uB825\uCC3D\uC5D0 \uD0C0\uC774\uD551\uD558\uC138\uC694. [Enter] \uD0A4\uB85C \uBB38\uC7A5\uC744 \uC81C\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
          </div>
        </div>
      </div>
    `;
      const targetDisplay = container.querySelector("#st-target-display");
      const visibleInput = container.querySelector("#st-visible-input");
      const progFill = container.querySelector("#st-progress-fill");
      const hudCpm = container.querySelector("#st-hud-cpm");
      const hudAcc = container.querySelector("#st-hud-acc");
      const hudTime = container.querySelector("#st-hud-time");
      const hudProg = container.querySelector("#st-hud-prog");
      this.sentenceSession = new HancomSentenceSession(
        current.text,
        (status) => {
          targetDisplay.innerHTML = this.renderTargetCharHighlights(status.targetText, status.input);
          progFill.style.width = `${status.progress}%`;
          hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
          hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
          hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;
          const min = String(Math.floor(status.elapsedSeconds / 60)).padStart(2, "0");
          const sec = String(status.elapsedSeconds % 60).padStart(2, "0");
          hudTime.textContent = `${min}:${sec}`;
        },
        (status) => {
          sounds.playCelebration();
          triggerConfetti();
          const earned = Math.round(status.cpm / 10 + 25);
          appState.addTypingScore(earned, status.cpm, status.accuracy);
          showToast(`\uC9E7\uC740 \uAE00 \uD0C0\uC790 \uC644\uC131! +${earned}P \uC801\uB9BD (${status.cpm} CPM, \uC815\uD655\uB3C4 ${status.accuracy}%)`, "\u{1F389}");
          setTimeout(() => {
            this.sentenceIndex = (this.sentenceIndex + 1) % list.length;
            this.renderShortPracticeMode(container);
          }, 1500);
        }
      );
      visibleInput.addEventListener("input", (e) => {
        sounds.playKeyTick();
        this.sentenceSession.handleInput(e.target.value);
      });
      visibleInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (e.isComposing) return;
          e.preventDefault();
          const currentVal = visibleInput.value.trim();
          if (currentVal === current.text || this.sentenceSession.isFinished || currentVal.length >= current.text.length * 0.8) {
            this.sentenceSession.submitLine();
          } else {
            showToast("\uBB38\uC7A5\uC744 \uB05D\uAE4C\uC9C0 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", "\u2328\uFE0F");
          }
        }
      });
      container.querySelectorAll(".substage-pill").forEach((pill) => {
        pill.addEventListener("click", (e) => {
          sounds.playClick();
          this.sentenceIndex = parseInt(e.currentTarget.dataset.sentenceIdx, 10);
          this.renderShortPracticeMode(container);
        });
      });
      const btnRestart = container.querySelector("#btn-restart-short");
      if (btnRestart) {
        btnRestart.addEventListener("click", () => {
          sounds.playClick();
          visibleInput.value = "";
          this.sentenceSession.reset();
          visibleInput.focus();
        });
      }
    }
    // --- 4. 긴 글 연습 (보이는 입력창 한컴타자 공식 스타일) ---
    renderLongPracticeMode(container) {
      const list = LONG_PASSAGES;
      const current = list[this.passageIndex % list.length];
      container.innerHTML = `
      <div class="substage-pills">
        ${list.map((item, idx) => `
          <button class="substage-pill ${idx === this.passageIndex ? "active" : ""}" data-passage-idx="${idx}">
            ${idx + 1}. \u300A${item.book}\u300B ${item.title}
          </button>
        `).join("")}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">\uD604\uC7AC \uD0C0\uC218</div>
            <div class="hud-value" id="lg-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC815\uD655\uB3C4</div>
            <div class="hud-value" id="lg-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uC9C4\uD589\uB3C4</div>
            <div class="hud-value" id="lg-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">\uBB38\uD559 \uC791\uD488</div>
            <div class="hud-value" style="font-size: 1.15rem; color: #4F46E5;">
              \u300A${current.book}\u300B
            </div>
          </div>
        </div>

        <div class="hancom-typing-layout">
          <div class="hancom-target-box" id="lg-target-display" style="min-height: 120px; font-size: 1.35rem;">
            ${this.renderTargetCharHighlights(current.text, "")}
          </div>

          <textarea class="hancom-real-input" id="lg-visible-input" rows="3"
                    placeholder="\uC704 \uBB38\uD559 \uC791\uD488\uC744 \uBCF4\uACE0 \uD3B8\uC548\uD558\uAC8C \uD0C0\uC774\uD551\uD558\uC138\uC694. (\uC644\uC131 \uD6C4 Enter)" 
                    autocomplete="off" spellcheck="false" autofocus></textarea>

          <div class="typing-progress-bar">
            <div class="typing-progress-fill" id="lg-progress-fill"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
          <button class="btn btn-secondary" id="btn-restart-long">\u{1F504} \uB2E4\uC2DC \uCE58\uAE30</button>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            \uAE34 \uAE00 \uC644\uB3C5 \uD0C0\uC774\uD551 \uC2DC \uB300\uB7C9\uC758 \uC131\uC7A5 \uD3EC\uC778\uD2B8(+60P)\uAC00 \uC801\uB9BD\uB429\uB2C8\uB2E4.
          </div>
        </div>
      </div>
    `;
      const targetDisplay = container.querySelector("#lg-target-display");
      const visibleInput = container.querySelector("#lg-visible-input");
      const progFill = container.querySelector("#lg-progress-fill");
      const hudCpm = container.querySelector("#lg-hud-cpm");
      const hudAcc = container.querySelector("#lg-hud-acc");
      const hudProg = container.querySelector("#lg-hud-prog");
      this.sentenceSession = new HancomSentenceSession(
        current.text,
        (status) => {
          targetDisplay.innerHTML = this.renderTargetCharHighlights(status.targetText, status.input);
          progFill.style.width = `${status.progress}%`;
          hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
          hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
          hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;
        },
        (status) => {
          sounds.playCelebration();
          triggerConfetti();
          const earned = Math.round(status.cpm / 10 + 60);
          appState.addTypingScore(earned, status.cpm, status.accuracy);
          showToast(`\uAE34 \uAE00 \uBB38\uD559 \uC644\uB3C5 \uD0C0\uC774\uD551 \uC644\uB8CC! +${earned}P \uC801\uB9BD!`, "\u{1F3C6}");
        }
      );
      visibleInput.addEventListener("input", (e) => {
        sounds.playKeyTick();
        this.sentenceSession.handleInput(e.target.value);
      });
      visibleInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          if (e.isComposing) return;
          e.preventDefault();
          const currentVal = visibleInput.value.trim();
          if (currentVal === current.text || this.sentenceSession.isFinished || currentVal.length >= current.text.length * 0.7) {
            this.sentenceSession.submitLine();
          } else {
            showToast("\uC791\uD488 \uB2E8\uB77D\uC744 \uC870\uAE08 \uB354 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", "\u{1F4D6}");
          }
        }
      });
      container.querySelectorAll(".substage-pill").forEach((pill) => {
        pill.addEventListener("click", (e) => {
          sounds.playClick();
          this.passageIndex = parseInt(e.currentTarget.dataset.passageIdx, 10);
          this.renderLongPracticeMode(container);
        });
      });
      const btnRestart = container.querySelector("#btn-restart-long");
      if (btnRestart) {
        btnRestart.addEventListener("click", () => {
          sounds.playClick();
          visibleInput.value = "";
          this.sentenceSession.reset();
          visibleInput.focus();
        });
      }
    }
    // Live Highlight Renderer with Hangul IME Prefix Support
    renderTargetCharHighlights(target, typed) {
      let html = "";
      const targetChars = Array.from(target);
      const typedChars = Array.from(typed);
      for (let i = 0; i < targetChars.length; i++) {
        const tc = targetChars[i];
        const typedChar = typedChars[i];
        let state = "pending";
        const isCursor = i === typedChars.length;
        if (typedChar !== void 0) {
          if (typedChar === tc) {
            state = "correct";
          } else if (i === typedChars.length - 1 && isHangulPrefix(typedChar, tc)) {
            state = "composing";
          } else {
            state = "incorrect";
          }
        }
        html += `<span class="char ${state} ${isCursor ? "active-cursor" : ""}">${tc === " " ? "&nbsp;" : tc}</span>`;
      }
      return html;
    }
    // ================= READING LOG VIEW (PDF WORKSHEET TEMPLATES) =================
    renderReading(container) {
      const isCustom = this.bookSourceType === "custom";
      const books = appState.getRecommendedBooks();
      const selectedBook = books.find((b) => b.id === this.selectedBookId) || books[0];
      container.innerHTML = `
      <div class="reading-container">
        <div class="reading-header">
          <span class="hero-pill-tag">Middle School Reading Worksheet</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            \uB9E4\uC77C 5\uBD84 \uB3C5\uC11C\uAE30\uB85D\uC7A5 <\uB098\uC758 \uCC45 \uB098\uC758 \uAE30\uB85D>
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            \uCCA8\uBD80 \uD559\uC2B5\uC9C0 \uC591\uC2DD\uC5D0 \uB9DE\uCD94\uC5B4 \uB9C8\uC74C\uC5D0 \uB0A8\uB294 \uAD6C\uC808, \uB0B4\uC6A9 \uC694\uC57D \uBC0F \uAC10\uC0C1, \uCC45 \uD034\uC988\uB97C \uC9C1\uC811 \uAE30\uB85D\uD574 \uBCF4\uC138\uC694.
          </p>
        </div>

        <!-- 4 Template Switcher Tabs (PDF Formats) -->
        <div class="reading-template-tabs">
          <button class="template-tab-btn ${this.readingTemplate === "quote_cards" ? "active" : ""}" data-tpl="quote_cards">
            \u{1F4D1} 1. \uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uAD6C\uC808 (PDF p.1~2)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === "summary_reflection" ? "active" : ""}" data-tpl="summary_reflection">
            \u{1F4DD} 2. \uB3C5\uC11C\uAE30\uB85D\uC7A5 (\uC694\uC57D&\uAC10\uC0C1) (PDF p.7~8)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === "make_quiz" ? "active" : ""}" data-tpl="make_quiz">
            \u2753 3. \uD034\uC988 \uB9CC\uB4E4\uAE30 (PDF p.3~4)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === "mindmap" ? "active" : ""}" data-tpl="mindmap">
            \u{1F310} 4. \uB9C8\uC778\uB4DC\uB9F5 (PDF p.5~6)
          </button>
        </div>

        <!-- Book Selection (\uCD94\uCC9C\uB3C4\uC11C \uC120\uD0DD vs \uC9C1\uC811 \uC785\uB825) -->
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.25rem 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-xs);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div style="font-weight: 800; font-size: 0.95rem;">
              \u{1F4D6} \uC77D\uC740 \uCC45 \uC120\uD0DD \uBC29\uC2DD
            </div>
            <div class="book-source-toggle" style="margin: 0;">
              <button class="book-source-btn ${!isCustom ? "active" : ""}" id="btn-src-rec">
                \uCD94\uCC9C\uB3C4\uC11C ${books.length}\uAD8C\uC5D0\uC11C \uC120\uD0DD
              </button>
              <button class="book-source-btn ${isCustom ? "active" : ""}" id="btn-src-custom">
                \u270D\uFE0F \uB0B4\uAC00 \uC77D\uC740 \uB3C4\uC11C \uC9C1\uC811 \uC785\uB825
              </button>
            </div>
          </div>

          <div style="margin-top: 1rem;">
            ${!isCustom ? `
              <select id="ws-rec-book" style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
                ${books.map((b) => `
                  <option value="${b.id}" ${b.id === this.selectedBookId ? "selected" : ""}>
                    ${b.isTeacherAdded ? "\u{1F31F} [\uC120\uC0DD\uB2D8 \uCD94\uCC9C] " : ""}${b.title} (${b.author} \uC800 \xB7 ${b.publisher || "\uCD94\uCC9C\uB3C4\uC11C"})
                  </option>
                `).join("")}
              </select>
            ` : `
              <div style="display: grid; grid-template-columns: 2fr 1.5fr; gap: 1rem;">
                <input type="text" id="ws-custom-title" placeholder="\uCC45 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694" style="padding: 0.65rem; border: 1px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700;">
                <input type="text" id="ws-custom-author" placeholder="\uC800\uC790\uB97C \uC785\uB825\uD558\uC138\uC694" style="padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
              </div>
            `}
          </div>
        </div>

        <!-- Render Selected PDF Worksheet Template -->
        <div class="worksheet-card">
          ${this.renderWorksheetTemplateHtml(selectedBook, isCustom)}
        </div>

        <!-- Class Reading Feed -->
        <div style="margin-top: 3.5rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>\u{1F4AC}</span> 2\uD559\uB144 3\uBC18 \uCE5C\uAD6C\uB4E4\uC758 \uC544\uCE68 \uB3C5\uC11C \uD53C\uB4DC
          </h3>
          <div class="reading-feed-list">
            ${this.readingLogs.map((log) => {
        const student = appState.state.students.find((s) => s.number === log.studentNumber) || { nickname: "\uC775\uBA85" };
        return `
                <div class="reading-feed-card">
                  <div class="feed-header">
                    <div class="feed-student-badge">
                      <span class="ticker-rank-pill" style="width:26px; height:26px;">${log.studentNumber}</span>
                      <span>${appState.formatStudentName(student)}</span>
                      <span class="badge badge-purple">\u300A${log.bookTitle}\u300B</span>
                      <span class="badge badge-blue">${log.templateType === "quote_cards" ? "\uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uAD6C\uC808" : log.templateType === "make_quiz" ? "\uD034\uC988 \uB9CC\uB4E4\uAE30" : "\uB3C5\uC11C\uAE30\uB85D\uC7A5"}</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${log.date}</span>
                  </div>

                  ${log.templateType === "quote_cards" ? `
                    <div class="feed-quote-box">"${log.quote1}" (p.${log.page1})</div>
                    ${log.quote2 ? `<div class="feed-quote-box">"${log.quote2}" (p.${log.page2})</div>` : ""}
                  ` : log.templateType === "make_quiz" ? `
                    <div style="background: #F8FAFC; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem;">
                      <div><strong>Q1.</strong> ${log.q1} (p.${log.p1})</div>
                      <div style="color: #059669; margin-top: 0.3rem;"><strong>A.</strong> ${log.a1}</div>
                    </div>
                  ` : `
                    <div style="font-size: 0.9rem; color: #334155; margin: 0.5rem 0;"><strong>\uB0B4\uC6A9 \uC694\uC57D:</strong> ${log.summary}</div>
                    <div class="feed-quote-box"><strong>\uAC10\uC0C1:</strong> ${log.reflection}</div>
                  `}
                </div>
              `;
      }).join("")}
          </div>
        </div>
      </div>
    `;
      container.querySelectorAll(".template-tab-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.readingTemplate = e.currentTarget.dataset.tpl;
          this.renderReading(container);
        });
      });
      const btnSrcRec = container.querySelector("#btn-src-rec");
      const btnSrcCustom = container.querySelector("#btn-src-custom");
      if (btnSrcRec) {
        btnSrcRec.addEventListener("click", () => {
          sounds.playClick();
          this.bookSourceType = "recommended";
          this.renderReading(container);
        });
      }
      if (btnSrcCustom) {
        btnSrcCustom.addEventListener("click", () => {
          sounds.playClick();
          this.bookSourceType = "custom";
          this.renderReading(container);
        });
      }
      const recSelect = container.querySelector("#ws-rec-book");
      if (recSelect) {
        recSelect.addEventListener("change", (e) => {
          this.selectedBookId = e.target.value;
          this.renderReading(container);
        });
      }
      const btnSubmitWs = container.querySelector("#btn-submit-worksheet");
      if (btnSubmitWs) {
        btnSubmitWs.addEventListener("click", () => {
          sounds.playCelebration();
          triggerConfetti();
          let title = selectedBook.title;
          let author = selectedBook.author;
          if (this.bookSourceType === "custom") {
            title = container.querySelector("#ws-custom-title").value.trim() || "\uB0B4\uAC00 \uC77D\uC740 \uCC45";
            author = container.querySelector("#ws-custom-author").value.trim() || "\uBBF8\uC0C1";
          }
          let newLog = {
            id: `r_${Date.now()}`,
            studentNumber: appState.state.userProfile.number,
            bookTitle: title,
            author,
            templateType: this.readingTemplate,
            date: appState.getTodayString()
          };
          if (this.readingTemplate === "quote_cards") {
            newLog.quote1 = container.querySelector("#ws-q1-text").value.trim() || "\uC778\uC0C1 \uAE4A\uC740 \uAD6C\uC808\uC744 \uAE30\uB85D\uD588\uC2B5\uB2C8\uB2E4.";
            newLog.page1 = container.querySelector("#ws-q1-page").value.trim() || "1";
            newLog.quote2 = container.querySelector("#ws-q2-text").value.trim();
            newLog.page2 = container.querySelector("#ws-q2-page").value.trim();
          } else if (this.readingTemplate === "summary_reflection") {
            newLog.summary = container.querySelector("#ws-summary-text").value.trim() || "\uCC45 \uB0B4\uC6A9 \uC694\uC57D";
            newLog.reflection = container.querySelector("#ws-reflection-text").value.trim() || "\uB098\uC758 \uB2E4\uC9D0\uACFC \uC0DD\uAC01";
          } else if (this.readingTemplate === "make_quiz") {
            newLog.q1 = container.querySelector("#ws-quiz-q1").value.trim() || "\uCC45\uC5D0 \uB300\uD55C \uD034\uC988";
            newLog.p1 = container.querySelector("#ws-quiz-p1").value.trim() || "1";
            newLog.a1 = container.querySelector("#ws-quiz-a1").value.trim() || "\uC815\uB2F5";
          } else if (this.readingTemplate === "mindmap") {
            newLog.centerKeyword = container.querySelector("#ws-mm-center")?.value.trim() || "\uD575\uC2EC \uC8FC\uC81C";
            newLog.keywords = [1, 2, 3, 4, 5, 6].map((k) => container.querySelector(`#ws-mm-${k}`)?.value.trim()).filter(Boolean);
          }
          this.readingLogs.unshift(newLog);
          appState.addReadingScore(30, newLog);
          showToast("\uB3C5\uC11C\uAE30\uB85D \uD559\uC2B5\uC9C0 \uC81C\uCD9C \uC644\uB8CC! +30P \uC801\uB9BD", "\u{1F4DA}");
          this.renderReading(container);
        });
      }
    }
    // Render PDF Worksheet Form
    renderWorksheetTemplateHtml(book, isCustom) {
      const { userProfile } = appState.state;
      const titleVal = isCustom ? "" : book.title;
      const authorVal = isCustom ? "" : book.author;
      if (this.readingTemplate === "quote_cards") {
        return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">\uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uAD6C\uC808</h2>
          <div class="worksheet-sub-title">&lt;\uB098\uC758 \uCC45 \uB098\uC758 \uAE30\uB85D&gt;</div>
        </div>

        <!-- 2 Torn Grid Note Paper Blocks -->
        <div class="torn-paper-box">
          <textarea class="worksheet-textarea" id="ws-q1-text" placeholder="\uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uCCAB \uBC88\uC9F8 \uAD6C\uC808\uC744 \uAE30\uB85D\uD574 \uBCF4\uC138\uC694.">${!isCustom && book.quotes[0] ? book.quotes[0] : ""}</textarea>
          <div class="torn-page-tag">
            ( <input type="text" class="page-num-input" id="ws-q1-page" placeholder="  "> \uD398\uC774\uC9C0 )
          </div>
        </div>

        <div class="torn-paper-box">
          <textarea class="worksheet-textarea" id="ws-q2-text" placeholder="\uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uB450 \uBC88\uC9F8 \uAD6C\uC808\uC744 \uAE30\uB85D\uD574 \uBCF4\uC138\uC694.">${!isCustom && book.quotes[1] ? book.quotes[1] : ""}</textarea>
          <div class="torn-page-tag">
            ( <input type="text" class="page-num-input" id="ws-q2-page" placeholder="  "> \uD398\uC774\uC9C0 )
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>\uCC45\uC81C\uBAA9:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>\uC800\uC790:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>\uD559\uBC88:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2, "0")}" readonly></div>
          <div><strong>\uC774\uB984:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === "teacher" ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            \u{1F4D1} \uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uAD6C\uC808 \uB4F1\uB85D (+30P)
          </button>
        </div>
      `;
      }
      if (this.readingTemplate === "summary_reflection") {
        return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">\uB3C5\uC11C\uAE30\uB85D\uC7A5</h2>
          <div class="worksheet-sub-title">&lt;\uB098\uC758 \uCC45 \uB098\uC758 \uAE30\uB85D&gt;</div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.5rem; color: #1E293B;">
            \uC5B4\uB5A4 \uB0B4\uC6A9\uC778\uAC00\uC694? <span style="font-size: 0.85rem; font-weight: 500; color: #64748B;">\uCC45\uC758 \uB0B4\uC6A9\uC5D0 \uB300\uD574 \uC815\uB9AC\uD574 \uBCF4\uC544\uC694.</span>
          </div>
          <textarea class="worksheet-textarea" id="ws-summary-text" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 1rem;" placeholder="\uC77D\uC740 \uCC45\uC758 \uC8FC\uC694 \uC904\uAC70\uB9AC\uB098 \uD575\uC2EC \uB0B4\uC6A9\uC744 \uC694\uC57D\uD574 \uBCF4\uC138\uC694."></textarea>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.5rem; color: #1E293B;">
            \uAC10\uC0C1\uC744 \uC801\uC5B4\uC694!
          </div>
          <div class="reflection-checkboxes">
            <label class="rf-check-label"><input type="checkbox" checked> \uB290\uB080\uC810</label>
            <label class="rf-check-label"><input type="checkbox"> \uB2E4\uC9D0</label>
            <label class="rf-check-label"><input type="checkbox"> \uBC30\uC6B8 \uC810</label>
            <label class="rf-check-label"><input type="checkbox"> \uC0C8\uB85C \uC54C\uAC8C \uB41C \uC0AC\uC2E4</label>
          </div>
          <textarea class="worksheet-textarea" id="ws-reflection-text" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 1rem;" placeholder="\uCCB4\uD06C\uD55C \uAC10\uC0C1 \uAD6C\uBD84\uC5D0 \uB9DE\uCD94\uC5B4 \uB098\uC758 \uC0DD\uAC01\uC744 \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uBCF4\uC138\uC694."></textarea>
        </div>

        <div class="torn-paper-box">
          <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.5rem;">\uAE30\uC5B5\uC5D0 \uB2F4\uACE0 \uC2F6\uC740 \uBD80\uBD84</div>
          <textarea class="worksheet-textarea" id="ws-memorable-text" placeholder="\uC624\uB798\uB3C4\uB85D \uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uAD6C\uC808\uC774\uB098 \uC778\uC0C1\uC801\uC778 \uC7A5\uBA74"></textarea>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>\uCC45\uC81C\uBAA9:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>\uC800\uC790:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>\uD559\uBC88:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2, "0")}" readonly></div>
          <div><strong>\uC774\uB984:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === "teacher" ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            \u{1F4DD} \uB3C5\uC11C\uAE30\uB85D\uC7A5 \uB4F1\uB85D (+30P)
          </button>
        </div>
      `;
      }
      if (this.readingTemplate === "make_quiz") {
        return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">\uD034\uC988 \uB9CC\uB4E4\uAE30</h2>
          <div class="worksheet-sub-title">&lt;\uB098\uC758 \uCC45 \uB098\uC758 \uAE30\uB85D&gt;</div>
        </div>

        <div class="torn-paper-box" style="margin-bottom: 1.5rem;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #1E293B; margin-bottom: 0.4rem;">
                Q1. ( <input type="text" id="ws-quiz-p1" style="width: 40px; border:none; border-bottom:1px solid #64748B; background:transparent; font-weight:700; text-align:center;"> p)
              </div>
              <textarea class="worksheet-textarea" id="ws-quiz-q1" placeholder="\uCE5C\uAD6C\uB4E4\uC774 \uCC45\uC744 \uC77D\uACE0 \uB9DE\uCD9C \uC218 \uC788\uB294 \uCCAB \uBC88\uC9F8 \uD034\uC988 \uC9C8\uBB38\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."></textarea>
            </div>
            <div style="border-left: 2px dashed #CBD5E1; padding-left: 1.5rem;">
              <div style="font-weight: 800; font-size: 1.1rem; color: #059669; margin-bottom: 0.4rem;">A. \uC815\uB2F5</div>
              <textarea class="worksheet-textarea" id="ws-quiz-a1" placeholder="Q1\uC758 \uC815\uB2F5\uC744 \uC801\uC5B4\uC8FC\uC138\uC694."></textarea>
            </div>
          </div>
        </div>

        <div class="torn-paper-box">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #1E293B; margin-bottom: 0.4rem;">
                Q2. ( <input type="text" id="ws-quiz-p2" style="width: 40px; border:none; border-bottom:1px solid #64748B; background:transparent; font-weight:700; text-align:center;"> p)
              </div>
              <textarea class="worksheet-textarea" id="ws-quiz-q2" placeholder="\uB450 \uBC88\uC9F8 \uD034\uC988 \uC9C8\uBB38\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."></textarea>
            </div>
            <div style="border-left: 2px dashed #CBD5E1; padding-left: 1.5rem;">
              <div style="font-weight: 800; font-size: 1.1rem; color: #059669; margin-bottom: 0.4rem;">A. \uC815\uB2F5</div>
              <textarea class="worksheet-textarea" id="ws-quiz-a2" placeholder="Q2\uC758 \uC815\uB2F5\uC744 \uC801\uC5B4\uC8FC\uC138\uC694."></textarea>
            </div>
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>\uCC45\uC81C\uBAA9:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>\uC800\uC790:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>\uD559\uBC88:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2, "0")}" readonly></div>
          <div><strong>\uC774\uB984:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === "teacher" ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            \u2753 \uB0B4\uAC00 \uB9CC\uB4E0 \uD034\uC988 \uB4F1\uB85D (+30P)
          </button>
        </div>
      `;
      }
      if (this.readingTemplate === "mindmap") {
        return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">\uB9C8\uC778\uB4DC\uB9F5</h2>
          <div class="worksheet-sub-title">&lt;\uB098\uC758 \uCC45 \uB098\uC758 \uAE30\uB85D&gt;</div>
        </div>

        <div style="background: radial-gradient(#CBD5E1 1.2px, transparent 1.2px); background-size: 18px 18px; border: 1px solid #CBD5E1; border-radius: var(--radius-lg); padding: 2.5rem 1.5rem; margin-bottom: 2rem; text-align: center; background-color: #FFFFFF;">
          <div style="font-size: 0.875rem; color: #64748B; margin-bottom: 1.5rem; font-weight: 600;">
            \uC911\uC2EC \uD0A4\uC6CC\uB4DC\uB97C \uC801\uACE0, \uCC45\uC744 \uC77D\uC73C\uBA70 \uB5A0\uC624\uB978 \uC0DD\uAC01\uACFC \uD575\uC2EC \uB2E8\uC5B4\uB97C 6\uAC1C\uC758 \uAC00\uC9C0\uC5D0 \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uBCF4\uC138\uC694.
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; max-width: 580px; margin: 0 auto;">
            <!-- Top 2 branches -->
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-1" placeholder="\u2196 \uC0DD\uAC01\uAC00\uC9C0 1" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              <input type="text" id="ws-mm-2" placeholder="\u2197 \uC0DD\uAC01\uAC00\uC9C0 2" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>

            <!-- Middle Row with Center Circle -->
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-3" placeholder="\u2190 \uC0DD\uAC01\uAC00\uC9C0 3" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              
              <div style="width: 140px; height: 90px; border: 3px solid #1E293B; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.06); padding: 0.5rem;">
                <span style="font-size: 0.7rem; color: #64748B; font-weight: 800;">\uC911\uC2EC \uD0A4\uC6CC\uB4DC</span>
                <input type="text" id="ws-mm-center" placeholder="\uD0A4\uC6CC\uB4DC \uC801\uAE30" style="border: none; border-bottom: 2px solid #3B82F6; text-align: center; font-weight: 800; font-size: 1rem; width: 90%; outline: none;">
              </div>

              <input type="text" id="ws-mm-4" placeholder="\uC0DD\uAC01\uAC00\uC9C0 4 \u2192" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>

            <!-- Bottom 2 branches -->
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-5" placeholder="\u2199 \uC0DD\uAC01\uAC00\uC9C0 5" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              <input type="text" id="ws-mm-6" placeholder="\u2198 \uC0DD\uAC01\uAC00\uC9C0 6" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>\uCC45\uC81C\uBAA9:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>\uC800\uC790:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>\uD559\uBC88:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2, "0")}" readonly></div>
          <div><strong>\uC774\uB984:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === "teacher" ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem; background: #4F46E5;">
            \u{1F310} \uB9C8\uC778\uB4DC\uB9F5 \uB4F1\uB85D (+30P)
          </button>
        </div>
      `;
      }
      return "";
    }
    // ================= BADGES & HALL OF FAME VIEW =================
    renderBadges(container) {
      const unlocked = appState.checkBadges();
      const unlockedIds = new Set(unlocked.map((b) => b.id));
      const ranked = appState.getRankedStudents(this.leaderboardCategory, this.leaderboardScope);
      container.innerHTML = `
      <div class="app-container" style="padding-top: 2rem;">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
          <span class="hero-pill-tag">Achievement & Multi-tier Hall of Fame</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            \uB098\uC758 \uC131\uC7A5 \uBC30\uC9C0 & \uBA85\uC608\uC758 \uC804\uB2F9
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            \uD559\uAE09\uBCC4, \uD559\uB144\uBCC4, \uC804\uAD50\uC0DD \uB2E8\uC704\uB85C \uC120\uC758\uC758 \uC131\uC7A5\uC744 \uD655\uC778\uD574 \uBCF4\uC138\uC694.
          </p>

          <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 1.25rem;">
            <button class="btn ${this.leaderboardScope === "class" ? "btn-primary" : "btn-secondary"} sub-scope" data-sub-scope="class">
              \u{1F3EB} \uD559\uAE09\uBCC4
            </button>
            <button class="btn ${this.leaderboardScope === "grade" ? "btn-primary" : "btn-secondary"} sub-scope" data-sub-scope="grade">
              \u{1F393} \uD559\uB144\uBCC4
            </button>
            <button class="btn ${this.leaderboardScope === "school" ? "btn-primary" : "btn-secondary"} sub-scope" data-sub-scope="school">
              \u{1F310} \uC804\uAD50\uC0DD
            </button>
          </div>
        </div>

        <!-- Badges Grid -->
        <div style="margin-bottom: 3.5rem;">
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>\u{1F396}\uFE0F</span> \uD68D\uB4DD \uAC00\uB2A5\uD55C \uC911\uD559 \uC131\uC7A5 \uBC30\uC9C0 (${unlocked.length}/${BADGES.length})
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem;">
            ${BADGES.map((badge) => {
        const isUnlocked = unlockedIds.has(badge.id);
        return `
                <div class="card" style="padding: 1.5rem; text-align: center; ${isUnlocked ? "border-color: #FBBF24; background: #FFFDF7;" : "opacity: 0.6; filter: grayscale(0.8);"}">
                  <div style="font-size: 2.8rem; margin-bottom: 0.75rem;">${badge.icon}</div>
                  <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.35rem; color: var(--text-primary);">
                    ${badge.name}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                    ${badge.desc}
                  </div>
                  <span class="badge ${isUnlocked ? "badge-green" : "badge-gray"}">
                    ${isUnlocked ? "\uD68D\uB4DD \uC644\uB8CC" : "\uB3C4\uC804 \uC9C4\uD589 \uC911"}
                  </span>
                </div>
              `;
      }).join("")}
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800;">
                \u{1F31F} 1\uC704 ~ 20\uC704 \uB7AD\uD0B9 (${this.leaderboardScope === "class" ? "2-3\uBC18" : this.leaderboardScope === "grade" ? "2\uD559\uB144 \uC804\uCCB4" : "\uC804\uAD50\uC0DD"})
              </h3>
            </div>
            <div class="category-nav-pills" style="margin: 0;">
              <button class="category-pill-btn ${this.leaderboardCategory === "total" ? "active" : ""}" data-subcat="total">\uD1B5\uD569</button>
              <button class="category-pill-btn ${this.leaderboardCategory === "manners" ? "active" : ""}" data-subcat="manners">\uC608\uC808</button>
              <button class="category-pill-btn ${this.leaderboardCategory === "typing" ? "active" : ""}" data-subcat="typing">\uD0C0\uC790</button>
              <button class="category-pill-btn ${this.leaderboardCategory === "reading" ? "active" : ""}" data-subcat="reading">\uB3C5\uC11C</button>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${ranked.slice(0, 20).map((s, idx) => {
        const rankIcon = idx === 0 ? "\u{1F947}" : idx === 1 ? "\u{1F948}" : idx === 2 ? "\u{1F949}" : `${idx + 1}\uC704`;
        const isMe = s.number === appState.state.userProfile.number && s.classNum === appState.state.userProfile.classNum;
        return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-radius: var(--radius-lg); background: ${isMe ? "var(--color-blue-light)" : "var(--bg-subtle)"}; border: 1px solid ${isMe ? "var(--color-blue)" : "var(--border-light)"};">
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.2rem; font-weight: 800; width: 36px; text-align: center;">${rankIcon}</span>
                    <div>
                      <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
                        ${appState.formatStudentName(s)}
                        <span style="font-size: 0.75rem; color: var(--text-muted);">(${s.grade || 2}-${s.classNum || 3})</span>
                        ${isMe ? '<span class="badge badge-blue" style="font-size: 0.65rem;">\uB0B4 \uAE30\uB85D</span>' : ""}
                      </div>
                      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                        "${s.comment || "\uC544\uCE68 \uB8E8\uD2F4\uC744 \uC131\uC2E4\uD788 \uC2E4\uCC9C \uC911\uC785\uB2C8\uB2E4."}"
                      </div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <span class="point-pill" style="font-size: 0.95rem;">
                      \u{1F31F} ${s.totalPoints.toLocaleString()}P
                    </span>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
                      \uC608\uC808: ${s.mannersScore}P | \uD0C0\uC790: ${s.typingBestCPM}\uD0C0 | \uB3C5\uC11C: ${s.readingScore}P
                    </div>
                  </div>
                </div>
              `;
      }).join("")}
          </div>
        </div>
      </div>
    `;
      container.querySelectorAll(".sub-scope").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.leaderboardScope = e.currentTarget.dataset.subScope;
          this.renderBadges(container);
        });
      });
      container.querySelectorAll("[data-subcat]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.leaderboardCategory = e.currentTarget.dataset.subcat;
          this.renderBadges(container);
        });
      });
    }
    // 로그인 전 첫 화면: 구글 로그인 + 개발용 테스트 로그인
    renderLoginGate(container) {
      container.innerHTML = `
      <section class="hero-section">
        <div class="hero-pill-tag">
          <span>\u2728</span> \uACBD\uD76C\uC911\uD559\uAD50 \xB7 \uB9E4\uC77C 5\uBD84 \uC62C\uBC14\uB978 \uB8E8\uD2F4
        </div>
        <h1 class="hero-title">
          \uB85C\uADF8\uC778\uD558\uACE0<br>
          <span class="highlight-gradient">\uBC14\uB9845\uBD84\uC744 \uC2DC\uC791\uD574 \uBCF4\uC138\uC694</span>
        </h1>
        <p class="hero-desc">
          \uC544\uCE68 \uC2DC\uAC04\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC26C\uB294 \uC2DC\uAC04\xB7\uC810\uC2EC\uC2DC\uAC04 \uB4F1 \uC9EC\uB0A0 \uB54C\uB9C8\uB2E4 \uB4E4\uC5B4\uC640\uC11C \uC608\uC808 \uC2E4\uCC9C, \uD55C\uCEF4\uD0C0\uC790, \uB3C5\uC11C\uAE30\uB85D\uC744 \uC774\uC5B4\uAC00\uC694!
        </p>

        <div class="card" style="max-width: 460px; margin: 2rem auto 0; padding: 2rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">\u{1F3EB}</div>
          <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.4rem;">\uD559\uAD50 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778</h2>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
            \uD559\uAD50 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4(<strong>@kyunghee.sen.ms.kr</strong>)\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694.<br>
            \uD559\uC0DD/\uAD50\uC0AC \uAD8C\uD55C\uC740 \uACC4\uC815\uC5D0 \uB530\uB77C \uC790\uB3D9\uC73C\uB85C \uAD6C\uBD84\uB429\uB2C8\uB2E4.
          </p>
          <button class="btn btn-primary" id="btn-gate-google" style="width: 100%; background: #4F46E5;">
            G \uAD6C\uAE00 \uB85C\uADF8\uC778
          </button>

          ${DEV_TEST_LOGIN_ENABLED ? `
            <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed var(--border-light);">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.6rem;">
                \u{1F9EA} \uAC1C\uBC1C \uB2E8\uACC4 \uD14C\uC2A4\uD2B8 (\uAD6C\uAE00 \uB85C\uADF8\uC778 \uC5C6\uC774 \uCCB4\uD5D8)
              </div>
              <div style="display: flex; gap: 0.6rem;">
                <button class="btn btn-secondary" id="btn-test-student" style="flex: 1;">\u{1F392} \uD559\uC0DD\uC73C\uB85C \uD14C\uC2A4\uD2B8</button>
                <button class="btn btn-secondary" id="btn-test-teacher" style="flex: 1;">\u{1F469}\u200D\u{1F3EB} \uAD50\uC0AC\uB85C \uD14C\uC2A4\uD2B8</button>
              </div>
            </div>
          ` : ""}
        </div>
      </section>
    `;
      container.querySelector("#btn-gate-google").addEventListener("click", () => {
        sounds.playClick();
        this.startGoogleLogin();
      });
      const testStudentBtn = container.querySelector("#btn-test-student");
      if (testStudentBtn) {
        testStudentBtn.addEventListener("click", () => {
          sounds.playClick();
          this.startTestLogin("student");
        });
      }
      const testTeacherBtn = container.querySelector("#btn-test-teacher");
      if (testTeacherBtn) {
        testTeacherBtn.addEventListener("click", () => {
          sounds.playClick();
          this.startTestLogin("teacher");
        });
      }
    }
    // 교사 권한이 없는 사용자에게 보여줄 잠금 화면
    renderTeacherLocked(container) {
      const isLoggedIn = appState.isLoggedIn();
      container.innerHTML = `
      <div class="app-container" style="padding-top: 3rem;">
        <div class="card" style="max-width: 520px; margin: 0 auto; padding: 2.5rem 2rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.75rem;">\u{1F512}</div>
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">\uAD50\uC0AC \uC804\uC6A9 \uD654\uBA74\uC785\uB2C8\uB2E4</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
            ${isLoggedIn ? `\uD604\uC7AC \uACC4\uC815(<strong>${appState.state.auth.email}</strong>)\uC740 \uD559\uC0DD \uAD8C\uD55C\uC785\uB2C8\uB2E4.<br>\uC120\uC0DD\uB2D8\uC774\uC2DC\uB77C\uBA74 \uAD50\uC0AC \uC778\uC99D \uCF54\uB4DC\uB85C \uAD8C\uD55C\uC744 \uC2E0\uCCAD\uD574 \uC8FC\uC138\uC694.` : "\uAD50\uC0AC \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uBA74 \uD559\uAE09 \uACBD\uC601 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br>\uD559\uAD50 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4(@kyunghee.sen.ms.kr)\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694."}
          </p>
          <button class="btn btn-primary" id="btn-locked-action" style="background: #4F46E5;">
            ${isLoggedIn ? "\u{1F511} \uAD50\uC0AC \uAD8C\uD55C \uC2E0\uCCAD" : "\uB85C\uADF8\uC778\uD558\uAE30"}
          </button>
        </div>
      </div>
    `;
      container.querySelector("#btn-locked-action").addEventListener("click", () => {
        sounds.playClick();
        if (isLoggedIn) {
          this.promptTeacherAccess();
        } else {
          document.getElementById("btn-google-auth").click();
        }
      });
    }
    // ================= TEACHER DASHBOARD VIEW (WITH 70% PROPOSAL SYSTEM & BOOK ADDITION) =================
    renderTeacher(container) {
      const activeClassKey = appState.state.selectedClassKey || "2-3";
      const [selGrade, selClass] = activeClassKey.split("-").map(Number);
      const classStudents = appState.getStudentsByClass(selGrade, selClass);
      const stats = appState.getClassStats(activeClassKey);
      let filtered = [...classStudents];
      if (this.tableFilter === "completed") {
        filtered = filtered.filter((s) => s.checked && s.quizDone);
      } else if (this.tableFilter === "ongoing") {
        filtered = filtered.filter((s) => (s.checked || s.quizDone) && !(s.checked && s.quizDone));
      } else if (this.tableFilter === "uncompleted") {
        filtered = filtered.filter((s) => !s.checked && !s.quizDone);
      }
      if (this.tableSearch) {
        filtered = filtered.filter(
          (s) => s.realName.includes(this.tableSearch) || s.nickname.includes(this.tableSearch) || String(s.number).includes(this.tableSearch)
        );
      }
      const proposals = appState.state.teacherProposals || [];
      const recommendedBooks = appState.getRecommendedBooks();
      container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-header">
          <div class="teacher-title-area">
            <h2>
              <span>\u{1F469}\u200D\u{1F3EB}</span> \uB2F4\uC784\uAD50\uC0AC \uD559\uAE09 \uACBD\uC601 \uB300\uC2DC\uBCF4\uB4DC
            </h2>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.4rem; flex-wrap: wrap;">
              <select class="teacher-class-select" id="tc-class-select" style="font-weight: 700; padding: 0.45rem 0.85rem; border-radius: 8px; border: 1px solid var(--border-light); background: #FFFFFF; font-size: 0.85rem;">
                ${[1, 2, 3].map((g) => `
                  <optgroup label="${g}\uD559\uB144 (7\uAC1C\uBC18)">
                    ${[1, 2, 3, 4, 5, 6, 7].map((c) => {
        const key = `${g}-${c}`;
        const isSel = key === activeClassKey;
        return `<option value="${key}" ${isSel ? "selected" : ""}>\uACBD\uD76C\uC911\uD559\uAD50 ${g}\uD559\uB144 ${c}\uBC18 (${g === 2 && c === 3 ? "\uB0B4 \uD559\uAE09 \u2B50" : "\uD559\uAE09 \uC870\uD68C"})</option>`;
      }).join("")}
                  </optgroup>
                `).join("")}
              </select>
              <span style="font-size: 0.85rem; color: var(--text-muted);">
                \uC624\uB298 \uC77C\uC790: ${appState.getTodayString()}
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-secondary" id="btn-export-records">
              \u{1F4E5} \uD559\uAE09 \uAE30\uB85D \uC5D1\uC140 \uC800\uC7A5
            </button>
            <button class="btn btn-primary" id="btn-open-exhibition" style="background: #4F46E5;">
              \u{1F4FA} TV \uC804\uC2DC \uBAA8\uB4DC \uC2E4\uD589
            </button>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="teacher-stats-grid">
          <div class="stat-card blue">
            <div class="stat-card-title">\uC624\uB298 \uCC38\uC5EC\uC728</div>
            <div class="stat-card-number">${stats.participationRate}%</div>
            <div class="stat-card-sub">\uC624\uB298 ${stats.activeCount}\uBA85 \uCC38\uC5EC</div>
          </div>
          <div class="stat-card emerald">
            <div class="stat-card-title">\uB8E8\uD2F4 \uC644\uB8CC\uC790</div>
            <div class="stat-card-number">${stats.completedCount}\uBA85</div>
            <div class="stat-card-sub">\uBBF8\uC644\uB8CC \uD559\uC0DD: ${stats.total - stats.completedCount}\uBA85</div>
          </div>
          <div class="stat-card amber">
            <div class="stat-card-title">\uD559\uAE09 \uD3C9\uADE0 \uD0C0\uC218</div>
            <div class="stat-card-number">${stats.avgCPM}\uD0C0</div>
            <div class="stat-card-sub">\uB514\uBC97 \uD0C0\uC790 \uC18C\uC591 \uC591\uD638</div>
          </div>
          <div class="stat-card purple">
            <div class="stat-card-title">\uD559\uAE09 \uB204\uC801 \uCD1D\uD569</div>
            <div class="stat-card-number">${stats.totalClassPoints.toLocaleString()}P</div>
            <div class="stat-card-sub">\uBAA9\uD45C 25,000P\uAE4C\uC9C0 \uC21C\uD56D \uC911</div>
          </div>
        </div>

        <!-- Teacher Etiquette Proposal & 70% Approval Panel -->
        <div class="teacher-proposal-panel">
          <div class="proposal-panel-header">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
                <span>\u{1F5F3}\uFE0F</span> \uD575\uC2EC \uC608\uC808 \uC9C0\uCE68 \uAD50\uC0AC \uC81C\uC548 & 70% \uACF5\uAC10 \uD22C\uD45C
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                \uC120\uC0DD\uB2D8 \uC804\uCCB4 \uC778\uC6D0(10\uBA85) \uC911 <strong>70% (7\uBA85 \uC774\uC0C1)</strong> \uACF5\uAC10\uC744 \uBC1B\uC73C\uBA74 \uD559\uC0DD \uACF5\uC2DD \uC2E4\uCC9C \uC9C0\uCE68\uC73C\uB85C \uC790\uB3D9 \uAC8C\uC2DC\uB429\uB2C8\uB2E4.
              </p>
            </div>
            <button class="btn btn-primary" id="btn-open-prop-modal" style="font-size: 0.85rem;">
              \u2795 \uC0C8 \uC608\uC808 \uC9C0\uCE68 \uC81C\uC548\uD558\uAE30
            </button>
          </div>

          <div class="proposal-grid">
            ${proposals.map((p) => {
        const voteCount = p.votes.length;
        const rate = Math.round(voteCount / p.totalTeachers * 100);
        const isApproved = p.status === "approved" || rate >= 70;
        return `
                <div class="proposal-card">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                      <span class="badge ${isApproved ? "badge-green" : "badge-orange"}">
                        ${isApproved ? "\u{1F389} \uACF5\uC2DD \uCC44\uD0DD \uC644\uB8CC (\uAC8C\uC2DC\uB428)" : `\uC2EC\uC0AC \uC911 (${rate}%)`}
                      </span>
                      <span style="font-size: 0.75rem; color: var(--text-muted);">${p.date}</span>
                    </div>
                    <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.35rem; color: #1E293B;">
                      ${p.rule}
                    </h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">
                      ${p.desc}
                    </p>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">
                      \uC81C\uC548\uC790: ${p.proposer}
                    </div>
                  </div>

                  <div style="margin-top: 1rem; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700;">
                      <span>\uACF5\uAC10 \uB4DD\uD45C\uC728</span>
                      <span style="color: ${isApproved ? "#059669" : "#D97706"};">${voteCount}/${p.totalTeachers}\uBA85 (${rate}%)</span>
                    </div>
                    <div class="proposal-vote-bar">
                      <div class="proposal-vote-fill" style="width: ${rate}%; background: ${isApproved ? "#10B981" : "#F59E0B"};"></div>
                    </div>
                    ${!isApproved ? `
                      <button class="btn btn-secondary btn-vote-sympathy" data-prop-id="${p.id}" style="width: 100%; margin-top: 0.5rem; font-size: 0.8rem; padding: 0.4rem;">
                        \u{1F44D} \uACF5\uAC10 \uD22C\uD45C\uD558\uAE30 (+1\uD45C)
                      </button>
                    ` : `
                      <div style="font-size: 0.75rem; color: #059669; font-weight: 700; text-align: center; margin-top: 0.5rem;">
                        \u2713 \uD559\uC0DD \uC608\uC808 \uC2E4\uCC9C \uD56D\uBAA9\uC5D0 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
                      </div>
                    `}
                  </div>
                </div>
              `;
      }).join("")}
          </div>
        </div>

        <!-- Teacher Recommended Books Management Panel -->
        <div class="teacher-proposal-panel" style="margin-top: 2rem;">
          <div class="proposal-panel-header">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
                <span>\u{1F4DA}</span> \uC911\uD559 \uCD94\uCC9C\uB3C4\uC11C \uB4F1\uB85D \uBC0F \uD559\uC0DD \uBC30\uD3EC \uAD00\uB9AC (${recommendedBooks.length}\uAD8C)
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                \uC120\uC0DD\uB2D8\uAED8\uC11C \uD559\uC0DD\uB4E4\uC5D0\uAC8C \uAD8C\uD558\uACE0 \uC2F6\uC740 \uC591\uC11C\uB97C \uB4F1\uB85D\uD558\uBA74, \uD559\uC0DD\uB4E4\uC758 [\uB3C5\uC11C \uAE30\uB85D] \uCD94\uCC9C\uB3C4\uC11C \uC120\uD0DD \uBAA9\uB85D\uC5D0 \uC989\uC2DC \uBC30\uD3EC\uB429\uB2C8\uB2E4.
              </p>
            </div>
            <button class="btn btn-primary" id="btn-open-book-modal" style="font-size: 0.85rem; background: #059669;">
              \u2795 \uC0C8 \uCD94\uCC9C\uB3C4\uC11C \uB4F1\uB85D\uD558\uAE30
            </button>
          </div>

          <div class="teacher-book-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.25rem;">
            ${recommendedBooks.map((b) => `
              <div class="card" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; border-color: ${b.isTeacherAdded ? "#10B981" : "var(--border-light)"}; background: ${b.isTeacherAdded ? "#F0FDF4" : "#FFFFFF"};">
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-size: 1.5rem;">${b.coverIcon || "\u{1F4D6}"}</span>
                    <span class="badge ${b.isTeacherAdded ? "badge-green" : "badge-purple"}">
                      ${b.isTeacherAdded ? "\uAD50\uC0AC \uB4F1\uB85D \u2B50" : "\uCCAD\uC18C\uB144 \uBCA0\uC2A4\uD2B8"}
                    </span>
                  </div>
                  <h4 style="font-weight: 800; font-size: 1.05rem; color: #1E293B; margin-bottom: 0.25rem;">
                    ${b.title}
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    ${b.author} \uC800 \xB7 ${b.publisher || "\uCD9C\uD310\uC0AC \uBBF8\uC0C1"}
                  </div>
                  <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5;">
                    ${b.desc}
                  </p>
                </div>
                <div style="margin-top: 0.85rem; border-top: 1px solid var(--border-light); padding-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted); display: flex; justify-content: space-between;">
                  <span>${b.isTeacherAdded ? `\uB4F1\uB85D\uC790: ${b.addedBy || "\uC120\uC0DD\uB2D8"}` : "\uAE30\uBCF8 \uAD8C\uC7A5\uB3C4\uC11C"}</span>
                  <span style="color: #4F46E5;">\uAD6C\uC808 ${b.quotes?.length || 0}\uAC1C</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Student Management Table (RealName + Nickname) -->
        <div class="table-container-card">
          <div class="table-toolbar">
            <div class="table-filter-pills">
              <button class="table-filter-btn ${this.tableFilter === "all" ? "active" : ""}" data-filter="all">\uC804\uCCB4 (${stats.total})</button>
              <button class="table-filter-btn ${this.tableFilter === "completed" ? "active" : ""}" data-filter="completed">\uC644\uB8CC (${stats.completedCount})</button>
              <button class="table-filter-btn ${this.tableFilter === "ongoing" ? "active" : ""}" data-filter="ongoing">\uC9C4\uD589 \uC911 (${stats.activeCount - stats.completedCount})</button>
              <button class="table-filter-btn ${this.tableFilter === "uncompleted" ? "active" : ""}" data-filter="uncompleted">\uBBF8\uCC38\uC5EC (${stats.total - stats.activeCount})</button>
            </div>

            <input type="text" class="table-search-input" id="tc-search-input" placeholder="\uC774\uB984 \uB610\uB294 \uB2C9\uB124\uC784 \uAC80\uC0C9..." value="${this.tableSearch}">
          </div>

          <div style="overflow-x: auto;">
            <table class="student-data-table">
              <thead>
                <tr>
                  <th style="width: 60px;">\uBC88\uD638</th>
                  <th style="width: 180px;">\uD559\uC0DD (\uC2E4\uBA85 + \uB2C9\uB124\uC784)</th>
                  <th style="width: 100px;">\uC608\uC808 \uC810\uC218</th>
                  <th style="width: 100px;">\uD0C0\uC790 \uC810\uC218</th>
                  <th style="width: 100px;">\uB3C5\uC11C \uC810\uC218</th>
                  <th style="width: 110px;">\uCD1D\uD569 \uD3EC\uC778\uD2B8</th>
                  <th style="width: 100px;">\uCD5C\uACE0 \uD0C0\uC218</th>
                  <th>\uC624\uB298\uC758 \uC544\uCE68 \uB2E4\uC9D0</th>
                  <th style="width: 140px; text-align: center;">\uCE6D\uCC2C \uC2A4\uD2F0\uCEE4</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map((student) => `
                  <tr>
                    <td><span class="student-num-badge">${student.number}</span></td>
                    <td>
                      <div class="student-name-col">
                        <strong>${student.realName}</strong>
                        <span style="color: #4F46E5; font-size: 0.8rem;">(${student.nickname})</span>
                        ${student.hasSticker ? "<span>\u2B50</span>" : ""}
                      </div>
                    </td>
                    <td><span class="badge badge-green">${student.mannersScore}P</span></td>
                    <td><span class="badge badge-blue">${student.typingScore}P</span></td>
                    <td><span class="badge badge-purple">${student.readingScore}P</span></td>
                    <td><span class="point-pill">\u{1F31F} ${student.totalPoints}P</span></td>
                    <td><span style="font-weight: 700; font-family: var(--font-mono);">${student.typingBestCPM} CPM</span></td>
                    <td style="color: var(--text-secondary); font-size: 0.85rem;">${student.comment || "\uC791\uC131 \uB300\uAE30 \uC911"}</td>
                    <td style="text-align: center;">
                      <button class="btn btn-secondary btn-praise-sticker" data-student-num="${student.number}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                        \u2B50 \uCE6D\uCC2C (+50P)
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TV Exhibition Modal -->
      <div class="exhibition-overlay" id="exhibition-view">
        <div class="exhibition-top-bar">
          <div class="exhibition-brand">
            <div class="logo-badge" style="background: #3B82F6;">Q</div>
            <div style="font-size: 1.3rem; font-weight: 800;">\uBC14\uB9845\uBD84 \uC804\uC2DC \uBAA8\uB4DC \u2014 2\uD559\uB144 3\uBC18</div>
            <span class="exhibition-badge">LIVE MORNING SHOWCASE</span>
          </div>
          <button class="exhibition-btn-close" id="btn-close-exhibition">\u2715 \uB2EB\uAE30 (ESC)</button>
        </div>
        <div class="exhibition-stage" id="exhibition-stage-content"></div>
        <div class="exhibition-bottom-bar">
          <div style="display: flex; gap: 1rem; align-items: center;">
            <span>\u23F1\uFE0F 5\uCD08\uB9C8\uB2E4 \uC790\uB3D9 \uC2AC\uB77C\uC774\uB4DC</span>
            <button class="btn btn-secondary" id="btn-ex-prev" style="background: rgba(255,255,255,0.1); color:#fff; border:none; padding:0.25rem 0.6rem;">\u25C0 \uC774\uC804</button>
            <button class="btn btn-secondary" id="btn-ex-next" style="background: rgba(255,255,255,0.1); color:#fff; border:none; padding:0.25rem 0.6rem;">\uB2E4\uC74C \u25B6</button>
          </div>
          <div class="exhibition-dots" id="exhibition-dots"></div>
        </div>
      </div>
    `;
      container.querySelectorAll(".btn-vote-sympathy").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const propId = e.currentTarget.dataset.propId;
          sounds.playSuccess();
          const res = appState.voteProposalSympathy(propId, `t_${Date.now()}`);
          if (res.isApproved) {
            sounds.playCelebration();
            triggerConfetti();
            showToast(`\uACF5\uAC10 70% \uB2EC\uC131! \uACF5\uC2DD \uC608\uC808 \uC9C0\uCE68\uC73C\uB85C \uCC44\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \u{1F389}`, "\u{1F5F3}\uFE0F");
          } else {
            showToast(`\uACF5\uAC10 \uD22C\uD45C \uC644\uB8CC! (\uD604\uC7AC ${res.rate}%)`, "\u{1F44D}");
          }
          this.renderTeacher(container);
        });
      });
      const btnOpenProp = container.querySelector("#btn-open-prop-modal");
      if (btnOpenProp) {
        btnOpenProp.addEventListener("click", () => {
          sounds.playClick();
          this.openEtiquetteProposalModal(container);
        });
      }
      const classSelect = container.querySelector("#tc-class-select");
      if (classSelect) {
        classSelect.addEventListener("change", (e) => {
          sounds.playClick();
          appState.setSelectedClassKey(e.target.value);
          this.renderTeacher(container);
        });
      }
      const btnOpenBook = container.querySelector("#btn-open-book-modal");
      if (btnOpenBook) {
        btnOpenBook.addEventListener("click", () => {
          sounds.playClick();
          this.openTeacherBookModal(container);
        });
      }
      container.querySelectorAll(".table-filter-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sounds.playClick();
          this.tableFilter = e.currentTarget.dataset.filter;
          this.renderTeacher(container);
        });
      });
      const searchInput = container.querySelector("#tc-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          this.tableSearch = e.target.value.trim();
          this.renderTeacher(container);
          const inputNow = container.querySelector("#tc-search-input");
          if (inputNow) {
            inputNow.focus();
            inputNow.setSelectionRange(inputNow.value.length, inputNow.value.length);
          }
        });
      }
      container.querySelectorAll(".btn-praise-sticker").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const studentNum = parseInt(e.currentTarget.dataset.studentNum, 10);
          sounds.playCelebration();
          triggerConfetti();
          appState.giveTeacherPraise(studentNum, 50);
          showToast(`${studentNum}\uBC88 \uD559\uC0DD\uC5D0\uAC8C \uCE6D\uCC2C \uC2A4\uD2F0\uCEE4\uC640 +50P \uC804\uB2EC \uC644\uB8CC!`, "\u2B50");
          this.renderTeacher(container);
        });
      });
      const btnExport = container.querySelector("#btn-export-records");
      if (btnExport) {
        btnExport.addEventListener("click", () => {
          sounds.playSuccess();
          const header = "\uBC88\uD638,\uC2E4\uBA85,\uB2C9\uB124\uC784,\uC608\uC808\uC810\uC218,\uD0C0\uC790\uC810\uC218,\uB3C5\uC11C\uC810\uC218,\uCD1D\uD569\uD3EC\uC778\uD2B8,\uCD5C\uACE0\uD0C0\uC218,\uB2E4\uC9D0\n";
          const rows = appState.state.students.map(
            (s) => `${s.number},${s.realName},${s.nickname},${s.mannersScore},${s.typingScore},${s.readingScore},${s.totalPoints},${s.typingBestCPM},"${s.comment || ""}"`
          ).join("\n");
          const blob = new Blob(["\uFEFF" + header + rows], { type: "text/csv;charset=utf-8;" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `\uBC14\uB9845\uBD84_2\uD559\uB1443\uBC18_\uAE30\uB85D_${appState.getTodayString()}.csv`;
          a.click();
          URL.revokeObjectURL(url);
          showToast("\uD559\uAE09 \uD65C\uB3D9 \uAE30\uB85D CSV \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC", "\u{1F4E5}");
        });
      }
      const btnExhibition = container.querySelector("#btn-open-exhibition");
      if (btnExhibition) {
        btnExhibition.addEventListener("click", () => {
          sounds.playClick();
          this.openExhibition();
        });
      }
    }
    // Teacher Proposal Modal
    openEtiquetteProposalModal(parentContainer) {
      let modal = document.getElementById("prop-create-modal");
      if (!modal) {
        modal = document.createElement("div");
        modal.className = "modal-overlay";
        modal.id = "prop-create-modal";
        modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px; text-align: left;">
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem;">\uC0C8 \uD575\uC2EC \uC608\uC808 \uC9C0\uCE68 \uC81C\uC548</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            \uC81C\uC548 \uD6C4 \uC804\uCCB4 \uC120\uC0DD\uB2D8(10\uBA85) \uC911 70% \uC774\uC0C1 \uACF5\uAC10\uC744 \uBC1B\uC73C\uBA74 \uACF5\uC2DD \uAC8C\uC2DC\uB429\uB2C8\uB2E4.
          </p>

          <div style="margin-bottom: 1rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uD574\uB2F9 \uC601\uC5ED</label>
            <select id="prop-domain-sel" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
              ${ETIQUETTE_DOMAINS.map((d) => `<option value="${d.id}">${d.icon} ${d.title}</option>`).join("")}
            </select>
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uC9C0\uCE68 \uC81C\uBAA9 (\uD575\uC2EC \uC218\uCE59)</label>
            <input type="text" id="prop-rule-input" placeholder="\uC608: \uCCB4\uC721\uAD00 \uC774\uB3D9 \uC2DC \uC815\uC219 \uBCF4\uD589\uD558\uAE30" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uC138\uBD80 \uC2E4\uCC9C \uC9C0\uCE68 \uBC0F \uAD50\uC721 \uCDE8\uC9C0</label>
            <textarea id="prop-desc-input" rows="3" placeholder="\uD559\uC0DD\uB4E4\uC774 \uC2E4\uCC9C\uD560 \uAD6C\uCCB4\uC801\uC778 \uD589\uB3D9 \uC694\uB839\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694." style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-family: inherit; font-size: 0.9rem;"></textarea>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-secondary" id="btn-close-prop" style="flex: 1;">\uCDE8\uC18C</button>
            <button class="btn btn-primary" id="btn-save-prop" style="flex: 1; background: #4F46E5;">\uC81C\uC548 \uB4F1\uB85D\uD558\uAE30 \u{1F5F3}\uFE0F</button>
          </div>
        </div>
      `;
        document.body.appendChild(modal);
      }
      modal.classList.add("active");
      modal.querySelector("#btn-close-prop").onclick = () => modal.classList.remove("active");
      modal.querySelector("#btn-save-prop").onclick = () => {
        const domainId = modal.querySelector("#prop-domain-sel").value;
        const rule = modal.querySelector("#prop-rule-input").value.trim();
        const desc = modal.querySelector("#prop-desc-input").value.trim();
        if (!rule || !desc) {
          showToast("\uC81C\uBAA9\uACFC \uC138\uBD80 \uC124\uBA85\uC744 \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.", "\u26A0\uFE0F");
          return;
        }
        appState.proposeEtiquette({
          domainId,
          rule,
          desc,
          proposer: `${appState.state.userProfile.realName} \uC120\uC0DD\uB2D8`
        });
        sounds.playSuccess();
        modal.classList.remove("active");
        showToast("\uC0C8 \uC608\uC808 \uC9C0\uCE68\uC774 \uC81C\uC548\uB418\uC5C8\uC2B5\uB2C8\uB2E4. (\uB3D9\uB8CC \uAD50\uC0AC \uD22C\uD45C \uC2DC\uC791)", "\u{1F5F3}\uFE0F");
        this.renderTeacher(parentContainer);
      };
    }
    // Teacher Recommended Book Modal
    openTeacherBookModal(parentContainer) {
      let modal = document.getElementById("teacher-book-create-modal");
      if (!modal) {
        modal = document.createElement("div");
        modal.className = "modal-overlay";
        modal.id = "teacher-book-create-modal";
        document.body.appendChild(modal);
      }
      modal.innerHTML = `
      <div class="modal-content" style="max-width: 540px; text-align: left;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
            <span>\u{1F4DA}</span> \uC0C8 \uCD94\uCC9C\uB3C4\uC11C \uB4F1\uB85D \uBC0F \uD559\uC0DD \uBC30\uD3EC
          </h3>
          <span class="badge badge-green">\uAD50\uC0AC \uAD8C\uD55C</span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
          \uC120\uC0DD\uB2D8\uAED8\uC11C \uB4F1\uB85D\uD558\uC2E0 \uB3C4\uC11C\uB294 \uD559\uC0DD\uB4E4\uC758 <strong>[\uB3C5\uC11C \uAE30\uB85D] \uCD94\uCC9C\uB3C4\uC11C \uC120\uD0DD \uB4DC\uB86D\uB2E4\uC6B4</strong>\uC5D0 \uC989\uC2DC \uBC30\uD3EC\uB418\uC5B4 \uD559\uC0DD\uB4E4\uC774 \uC77D\uACE0 \uAD6C\uC808 \uBA54\uBAA8\uB098 \uD034\uC988\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uB3C4\uC11C \uC81C\uBAA9</label>
              <input type="text" id="tb-title-input" placeholder="\uC608: \uBD88\uD3B8\uD55C \uD3B8\uC758\uC810" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uC800\uC790</label>
              <input type="text" id="tb-author-input" placeholder="\uC608: \uAE40\uD638\uC5F0" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uCD9C\uD310\uC0AC</label>
              <input type="text" id="tb-pub-input" placeholder="\uC608: \uB098\uBB34\uC606\uC758\uC790" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uBD84\uB958 \uCE74\uD14C\uACE0\uB9AC</label>
              <select id="tb-cat-input" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
                <option value="\uCCAD\uC18C\uB144 \uBB38\uD559\xB7\uC131\uC7A5">\uCCAD\uC18C\uB144 \uBB38\uD559\xB7\uC131\uC7A5</option>
                <option value="\uACF5\uAC10\xB7\uC6B0\uC815\xB7\uAD00\uACC4">\uACF5\uAC10\xB7\uC6B0\uC815\xB7\uAD00\uACC4</option>
                <option value="\uC778\uBB38\xB7\uAD50\uC591">\uC778\uBB38\xB7\uAD50\uC591</option>
                <option value="\uACFC\uD559\xB7\uD658\uACBD">\uACFC\uD559\xB7\uD658\uACBD</option>
                <option value="\uC9C4\uB85C\xB7\uC790\uAE30\uACC4\uBC1C">\uC9C4\uB85C\xB7\uC790\uAE30\uACC4\uBC1C</option>
              </select>
            </div>
          </div>

          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uCD94\uCC9C \uC774\uC720 \uBC0F \uB3C4\uC11C \uC18C\uAC1C</label>
            <textarea id="tb-desc-input" rows="2" placeholder="\uD559\uC0DD\uB4E4\uC5D0\uAC8C \uC774 \uCC45\uC744 \uAD8C\uD558\uB294 \uC774\uC720\uB97C \uB2E4\uC815\uD558\uAC8C \uB0A8\uACA8\uC8FC\uC138\uC694." style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-family: inherit; font-size: 0.875rem;"></textarea>
          </div>

          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">\uB300\uD45C \uC778\uC0C1 \uAE4A\uC740 \uAD6C\uC808 (\uC120\uD0DD)</label>
            <input type="text" id="tb-q1-input" placeholder="\uD559\uC0DD\uB4E4\uC774 \uAE30\uC5B5\uD558\uBA74 \uC88B\uC740 \uBA85\uBB38\uC7A5 1\uAD6C\uC808" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 0.4rem;">
            <input type="text" id="tb-q2-input" placeholder="\uD559\uC0DD\uB4E4\uC774 \uAE30\uC5B5\uD558\uBA74 \uC88B\uC740 \uBA85\uBB38\uC7A5 2\uAD6C\uC808 (\uC120\uD0DD)" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-size: 0.85rem;">
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem;">
          <button class="btn btn-secondary" id="btn-close-tb-modal" style="flex: 1;">\uCDE8\uC18C</button>
          <button class="btn btn-primary" id="btn-save-tb-modal" style="flex: 1; background: #059669;">\uCD94\uCC9C\uB3C4\uC11C \uB4F1\uB85D \uBC0F \uBC30\uD3EC \u{1F4DA}</button>
        </div>
      </div>
    `;
      modal.classList.add("active");
      modal.querySelector("#btn-close-tb-modal").onclick = () => modal.classList.remove("active");
      modal.querySelector("#btn-save-tb-modal").onclick = () => {
        const title = modal.querySelector("#tb-title-input").value.trim();
        const author = modal.querySelector("#tb-author-input").value.trim();
        const publisher = modal.querySelector("#tb-pub-input").value.trim();
        const category = modal.querySelector("#tb-cat-input").value;
        const desc = modal.querySelector("#tb-desc-input").value.trim();
        const q1 = modal.querySelector("#tb-q1-input").value.trim();
        const q2 = modal.querySelector("#tb-q2-input").value.trim();
        if (!title || !author) {
          showToast("\uB3C4\uC11C \uC81C\uBAA9\uACFC \uC800\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", "\u26A0\uFE0F");
          return;
        }
        const quotes = [q1, q2].filter(Boolean);
        appState.addRecommendedBook({
          title,
          author,
          publisher,
          category,
          coverIcon: "\u{1F4D8}",
          desc,
          quotes,
          addedBy: `${appState.state.userProfile.realName} \uC120\uC0DD\uB2D8`
        });
        modal.classList.remove("active");
        sounds.playCelebration();
        triggerConfetti();
        showToast(`\u300A${title}\u300B \uCD94\uCC9C\uB3C4\uC11C\uAC00 \uB4F1\uB85D\uB418\uC5B4 \uD559\uC0DD\uB4E4\uC5D0\uAC8C \uBC30\uD3EC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!`, "\u{1F4DA}");
        this.renderTeacher(parentContainer);
      };
    }
    // TV Exhibition
    openExhibition() {
      const overlay = document.getElementById("exhibition-view");
      if (!overlay) return;
      overlay.classList.add("active");
      this.exhibitionIndex = 0;
      this.updateExhibitionSlide();
      clearInterval(this.exhibitionTimer);
      this.exhibitionTimer = setInterval(() => {
        this.nextExhibitionSlide();
      }, 5e3);
      const closeBtn = document.getElementById("btn-close-exhibition");
      if (closeBtn) closeBtn.onclick = () => this.closeExhibition();
      const prevBtn = document.getElementById("btn-ex-prev");
      const nextBtn = document.getElementById("btn-ex-next");
      if (prevBtn) prevBtn.onclick = () => this.prevExhibitionSlide();
      if (nextBtn) nextBtn.onclick = () => this.nextExhibitionSlide();
      const escHandler = (e) => {
        if (e.key === "Escape") {
          this.closeExhibition();
          window.removeEventListener("keydown", escHandler);
        }
      };
      window.addEventListener("keydown", escHandler);
    }
    closeExhibition() {
      const overlay = document.getElementById("exhibition-view");
      if (overlay) overlay.classList.remove("active");
      clearInterval(this.exhibitionTimer);
    }
    nextExhibitionSlide() {
      const students = appState.state.students.filter((s) => s.comment);
      if (!students.length) return;
      this.exhibitionIndex = (this.exhibitionIndex + 1) % students.length;
      this.updateExhibitionSlide();
    }
    prevExhibitionSlide() {
      const students = appState.state.students.filter((s) => s.comment);
      if (!students.length) return;
      this.exhibitionIndex = (this.exhibitionIndex - 1 + students.length) % students.length;
      this.updateExhibitionSlide();
    }
    updateExhibitionSlide() {
      const students = appState.state.students.filter((s) => s.comment);
      if (!students.length) return;
      const student = students[this.exhibitionIndex];
      const stage = document.getElementById("exhibition-stage-content");
      const dots = document.getElementById("exhibition-dots");
      if (stage) {
        stage.innerHTML = `
        <div class="exhibition-card">
          <div class="exhibition-student-info">
            <span>\u{1F392}</span>
            <span>2\uD559\uB144 3\uBC18 ${student.number}\uBC88 <strong>${appState.formatStudentName(student)}</strong> \uD559\uC0DD\uC758 \uC544\uCE68 \uB2E4\uC9D0</span>
          </div>
          <div class="exhibition-quote">
            "${student.comment}"
          </div>
          <div class="exhibition-metrics">
            <div>
              <div class="ex-metric-val">${student.mannersScore}P</div>
              <div class="ex-metric-lbl">\uC608\uC808 \uC810\uC218</div>
            </div>
            <div>
              <div class="ex-metric-val">${student.typingBestCPM} <span style="font-size: 1rem; color: rgba(255,255,255,0.7);">CPM</span></div>
              <div class="ex-metric-lbl">\uCD5C\uACE0 \uD0C0\uC218</div>
            </div>
            <div>
              <div class="ex-metric-val" style="color: #FBBF24;">${student.readingScore}P</div>
              <div class="ex-metric-lbl">\uB3C5\uC11C\uAE30\uB85D \uC810\uC218</div>
            </div>
          </div>
        </div>
      `;
      }
      if (dots) {
        dots.innerHTML = students.map((_, idx) => `
        <div class="ex-dot ${idx === this.exhibitionIndex ? "active" : ""}"></div>
      `).join("");
      }
    }
  };
  function initApp() {
    if (!window.__app) {
      window.__app = new App();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
