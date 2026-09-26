/* CODIA_HYBRID_LAYOUT_KERNEL_START */
const TAB_ICONS = [
  {
    url: "https://static.codia.ai/s/image_15802c57-677b-4909-9ae5-f3e8e1068330.png",
    label: "Add",
  },
  {
    url: "https://static.codia.ai/s/image_525d8f8c-3f55-4842-8599-ed7a8c3b9885.png",
    label: "Chat",
  },
  {
    url: "https://static.codia.ai/s/image_0820ff99-f9ae-459f-a6b0-a6cd91bce844.png",
    label: "Web",
  },
  {
    url: "https://static.codia.ai/s/image_14e8eb72-23a4-443c-886a-8b4355f911f7.png",
    label: "Web",
  },
  {
    url: "https://static.codia.ai/s/image_ff2af383-31f1-4ef0-af3f-eb052b0847fa.png",
    label: "APIs",
  },
  {
    url: "https://static.codia.ai/s/image_016675f3-33a4-4781-babb-828895ed78f1.png",
    label: "Goog",
  },
  {
    url: "https://static.codia.ai/s/image_d1e7cedf-25d7-44a9-b4cf-118f3a9833c9.png",
    label: "cloau",
  },
  {
    url: "https://static.codia.ai/s/image_4ba540b9-347f-4547-b433-b51d156ce735.png",
    label: "anthr",
  },
  {
    url: "https://static.codia.ai/s/image_325a1697-6a5a-4d4d-8fd5-09c6b0da007d.png",
    label: "Zensr",
  },
  {
    url: "https://static.codia.ai/s/image_016675f3-33a4-4781-babb-828895ed78f1.png",
    label: "Stand",
  },
  {
    url: "https://static.codia.ai/s/image_016675f3-33a4-4781-babb-828895ed78f1.png",
    label: "Home",
  },
  {
    url: "https://static.codia.ai/s/image_3c8449d2-0525-4483-b196-cba7633e4547.png",
    label: "Zens",
  },
  {
    url: "https://static.codia.ai/s/image_c5161721-18aa-42aa-bcb2-b7e2fac96ed5.png",
    label: "April",
  },
  {
    url: "https://static.codia.ai/s/image_6b8bc077-a76d-4e21-bd55-2ee98f9d6fba.png",
    label: "Codia",
  },
];

const TOOLBAR_ICONS_LEFT = [
  "https://static.codia.ai/s/image_831ebc87-9f85-4a83-b321-d7ca864dacff.png",
  "https://static.codia.ai/s/image_60196701-8b7c-4fdc-a013-0ce6f30f5ca2.png",
  "https://static.codia.ai/s/image_bc30e4ac-227b-43dc-8933-89abd2f2790a.png",
  "https://static.codia.ai/s/image_7ffee4eb-9666-4eb4-9024-ab93797eaacc.png",
];

const TOOLBAR_ICONS_RIGHT = [
  "https://static.codia.ai/s/image_339b2683-9e2d-4f1b-a468-47529ea3e3ca.png",
  "https://static.codia.ai/s/image_8b680bf3-73ce-4427-a617-021a4ca72a90.png",
  "https://static.codia.ai/s/image_741f32ff-12ad-4985-81a6-ca0c3f6e4d8c.png",
  "https://static.codia.ai/s/image_bc5e4264-be52-474f-ae9b-a77b37cb8717.png",
  "https://static.codia.ai/s/image_fe7cadb6-e27b-453f-aecd-198a95c156b6.png",
  "https://static.codia.ai/s/image_721ebeb9-df9f-478e-8e64-268085aad546.png",
  "https://static.codia.ai/s/image_95b4627a-3347-4bf1-a645-fbfb1c57fd57.png",
];

export function BrowserChrome() {
  return (
    <div className="browser-chrome">
      {/* Tab bar - node 112 */}
      <div className="tab-bar">
        {/* Active tab (Zenspaces) */}
        <div className="tab-active">
          <div className="tab-active-icon-wrap">
            <img
              src="https://static.codia.ai/s/image_8cd9b321-9e0b-4c35-b5ff-047048b481d7.png"
              alt="Z"
              width={13}
              height={13}
              style={{ objectFit: "contain" }}
            />
            <img
              src="https://static.codia.ai/s/image_8ab948d3-c9d6-4bde-afaf-0c6266e1781a.png"
              alt=""
              width={13}
              height={13}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="tab-label-active">Z</span>
          <img
            src="https://static.codia.ai/s/image_325a1697-6a5a-4d4d-8fd5-09c6b0da007d.png"
            alt="close"
            width={10}
            height={10}
            style={{ objectFit: "contain", marginLeft: 4 }}
          />
        </div>
        {/* Other tabs */}
        {TAB_ICONS.map((tab, i) => (
          <div key={i} className="tab-item">
            <img
              src={tab.url}
              alt={tab.label}
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
            <span className="tab-item-label">{tab.label}</span>
          </div>
        ))}
        {/* New tab + buttons */}
        <img
          src="https://static.codia.ai/s/image_016675f3-33a4-4781-babb-828895ed78f1.png"
          alt=""
          width={14}
          height={14}
          style={{ objectFit: "contain", marginLeft: 4 }}
        />
        <img
          src="https://static.codia.ai/s/image_6b8bc077-a76d-4e21-bd55-2ee98f9d6fba.png"
          alt=""
          width={14}
          height={14}
          style={{ objectFit: "contain", marginLeft: 4 }}
        />
      </div>

      {/* URL bar / toolbar - node 88 */}
      <div className="url-bar">
        {/* Left nav icons */}
        <div className="url-bar-left">
          {TOOLBAR_ICONS_LEFT.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              width={18}
              height={18}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
        {/* Address bar - node 96 */}
        <div className="address-bar">
          <img
            src="https://static.codia.ai/s/image_9c5f6811-a890-4833-b972-6638844537a9.png"
            alt=""
            width={16}
            height={14}
            style={{ objectFit: "contain" }}
          />
          <img
            src="https://static.codia.ai/s/image_44287930-1253-4ba4-9593-4bac6ddc9f5e.png"
            alt=""
            width={16}
            height={19}
            style={{ objectFit: "contain" }}
          />
          <span className="address-text">zenspaces.ai</span>
          <img
            src="https://static.codia.ai/s/image_86cfbdfe-26e0-4652-b262-75db213dfb92.png"
            alt=""
            width={24}
            height={20}
            style={{ objectFit: "contain", marginLeft: "auto" }}
          />
          <img
            src="https://static.codia.ai/s/image_e0b312b8-61e8-4161-ac81-61d91bb8ec79.png"
            alt=""
            width={20}
            height={23}
            style={{ objectFit: "contain" }}
          />
          <div className="addr-icon-badge">
            <img
              src="https://static.codia.ai/s/image_3f8fb46b-f5f5-4916-bbc0-e3e08a2d7d54.png"
              alt=""
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
            <span className="addr-badge-text">3</span>
          </div>
        </div>
        {/* Right icons */}
        <div className="url-bar-right">
          {TOOLBAR_ICONS_RIGHT.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              width={18}
              height={18}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
/* CODIA_HYBRID_LAYOUT_KERNEL_END */
