// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [
   {
      "name": "Owen",
      "photo": "https://media.licdn.com/dms/image/C5603AQF8Tk6N_lqoxQ/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=CXfsOoRnpKZ31wZ_CdNN1W85iaE-hPWJJ9hUHkMNN2k",
      "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
   },
   {
      "name": "Pavan",
      "photo": "https://media.licdn.com/dms/image/C4E03AQHBHslWLDDlIQ/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=B_iblypy-NSFvC9dYmvzw03uxh1sly0_0USpVJw8Slw",
      "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
   },
   {
      "name": "Chuck",
      "photo": "https://media.licdn.com/dms/image/C5603AQGwbQ68DWx8zA/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=-42wumlFhQR92Xkdenzb_P_Iau_VnLMDN_kBoZNTBWc",
      "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
   },
   {
      "name": "Karina",
      "photo": "https://media.licdn.com/dms/image/C4E03AQH3vB5c03P02A/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=kxL47-7OB6NcmE997LZo8EXONegDBeG6ZxFUjYrCvsI",
      "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
   },
   {
      "name": "Miriam",
      "photo": "https://media.licdn.com/dms/image/C4E03AQEc2x4Watw4Iw/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=XpbCscu6vGel_9OYRRkevCVIzQgEGV5v_zt1bSSXQ8U",
      "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
   },
   {
      "name": "Lisa",
      "photo": "https://media.licdn.com/dms/image/C5103AQGGEZYWg8zA-w/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=oup0IwDisjaPfPlA0_UqwhTiuSb96iz8wyEZXlNfFII",
      "scores": [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
   },
   {
      "name": "Nicole",
      "photo": "https://media.licdn.com/dms/image/C4E03AQEtkwwxkwt-Aw/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=JajmwEM6MaKeLV0P7jVeNpZnP2xEvmpvEzr9T1Kc1W4",
      "scores": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
   },
   {
      "name": "Jason",
      "photo": "https://media.licdn.com/dms/image/C5603AQFR5seQDMIaOA/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=KnSjiwd7M94g9vNKDsWtVHw749UMM9Ct6AKm2NtgNPk",
      "scores": [2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
   },
   {
      "name": "Nate",
      "photo": "https://media.licdn.com/dms/image/C5103AQEUd53lt4KYkw/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=7cp0oFCrznp7MGv4H2UZ07ot2tgjE06auYzbijAbcxg",
      "scores": [5, 5, 5, 5, 5, 1, 1, 1, 1, 1]
   },
   {
      "name": "Ken",
      "photo": "https://media.licdn.com/dms/image/C4D03AQHWO3J3-UfaeQ/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=1kFEML2WPVFmStUuI3SH8ZpAHlgPgzpbpimXX9gi5SI",
      "scores": [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]
   }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;