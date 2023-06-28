<script setup lang="ts"></script>

<template>
  <div
    class="relative bg-slate-900 w-full flex flex-col items-center justify-start text-left text-sm text-neutral-1 font-body-1-light"
  >
    <div class="self-stretch relative h-[800px] overflow-hidden shrink-0">
      <div class="absolute w-full top-[0px] right-[0px] left-[0px] h-24">
        <img
          class="absolute top-[calc(50%_-_24px)] left-[112px] w-24 h-12 overflow-hidden"
          alt=""
          src="/logo.svg"
        />
        <div
          class="absolute h-[51.04%] top-[23.96%] right-[112px] bottom-[25%] flex flex-row py-2.5 px-0 box-border items-start justify-start gap-[32px]"
        >
          <div class="flex flex-col items-center justify-start gap-[8px]">
            <div
              class="relative leading-[150%] uppercase font-semibold [background:linear-gradient(99.05deg,_#bc3cd8,_#c54b8c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            >
              HOME
            </div>
            <div
              class="relative box-border w-[11.5px] h-[2.5px] border-t-[2.5px] border-solid border-neutral-1"
            />
          </div>
          <div class="flex flex-col items-center justify-start gap-[8px]">
            <div class="relative leading-[150%] uppercase font-semibold">
              Work
            </div>
            <div
              class="relative box-border w-[11.5px] h-[2.5px] hidden border-t-[2.5px] border-solid border-neutral-1"
            />
          </div>
          <div class="flex flex-col items-center justify-start gap-[8px]">
            <div class="relative leading-[150%] uppercase font-semibold">
              About
            </div>
            <div
              class="relative box-border w-[11.5px] h-[2.5px] hidden border-t-[2.5px] border-solid border-neutral-1"
            />
          </div>
        </div>
      </div>
      <div
        class="absolute w-[calc(100%_-_224px)] top-[316px] right-[112px] left-[112px] flex flex-row py-0 px-[104px] box-border items-start justify-start text-center text-37xl text-neutral-2"
      >
        <div class="flex-1 relative tracking-[-0.02em] leading-[150%]">
          <span class="font-light">I’m a designer specialising in </span>
          <span class="font-semibold text-neutral-1">
            <span>UI/UX</span>
            <span class="text-white"> </span>
          </span>
          <span class="font-light">
            <span>and</span>
            <span class="text-white"> </span>
          </span>
          <span class="font-semibold text-neutral-1">Interaction Design</span>
        </div>
      </div>
      <img
        class="absolute bottom-[42px] left-[calc(50%_-_20px)] w-10 h-10 overflow-hidden"
        alt=""
        src="/icon--chevrondown.svg"
      />
    </div>
    <div
      class="self-stretch flex flex-col pt-20 px-28 pb-[130px] items-start justify-start text-21xl"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[80px]"
      >
        <div class="self-stretch flex flex-row items-start justify-start">
          <div class="flex-1 relative leading-[150%]">
            <p class="m-0">
              <span class="font-light font-body-1-light">
                <span class="text-neutral-2">Some of</span>
                <span class="text-white"> </span>
              </span>
              <span class="font-semibold">the clients I have</span>
            </p>
            <p class="m-0 font-semibold">designed for</p>
          </div>
        </div>
        <div
          class="self-stretch overflow-hidden flex flex-row py-4 px-0 items-center justify-between"
        >
          <img
            class="relative w-[194.46px] h-[60.5px] overflow-hidden shrink-0"
            alt=""
            src="/airbnb-logo.svg"
          />
          <img
            class="relative w-[181.5px] h-[60.5px] overflow-hidden shrink-0"
            alt=""
            src="/google-logo.svg"
          />
          <img
            class="relative w-[263.61px] h-[56.18px] overflow-hidden shrink-0"
            alt=""
            src="/microsoft-logo.svg"
          />
          <img
            class="relative w-[172.86px] h-[51.86px] overflow-hidden shrink-0"
            alt=""
            src="/fedex-logo.svg"
          />
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-col pt-20 px-[110px] pb-[120px] items-start justify-start gap-[97px] text-base"
    >
      <div
        class="self-stretch flex flex-row items-start justify-start text-21xl text-neutral-2"
      >
        <div class="flex-1 relative leading-[150%]">
          <span class="font-light">
            <span>Selected</span>
            <span class="text-white"> </span>
          </span>
          <span class="font-semibold text-neutral-1">Works</span>
        </div>
      </div>
      <div
        class="self-stretch h-[490px] flex flex-row items-start justify-start gap-[32px]"
      >
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/col-1@2x.png"
        />
        <div
          class="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]"
        >
          <div
            class="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
            >
              <div
                class="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold"
              >
                Real estate Template
              </div>
              <div
                class="self-stretch relative text-13xl leading-[150%] text-neutral-2"
              >
                <span class="font-light">
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </span>
                <span class="text-neutral-1">
                  <span class="font-light"> </span>
                  <span class="font-semibold"
                    >adipiscing elit. Ultrices lorem non feugiat egestas
                    amet.</span
                  >
                </span>
              </div>
            </div>
            <div
              class="self-stretch relative text-lg leading-[150%] font-light"
            >
              Website Design
            </div>
          </div>
          <div
            class="rounded-81xl flex flex-row py-2 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-2"
          >
            <div class="relative tracking-[0.04em] leading-[150%] uppercase">
              View work
            </div>
            <img
              class="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
      <div
        class="self-stretch h-[490px] flex flex-row items-start justify-start gap-[32px]"
      >
        <div
          class="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]"
        >
          <div
            class="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
            >
              <div
                class="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold"
              >
                Plant identification app
              </div>
              <div
                class="self-stretch relative text-13xl leading-[150%] text-neutral-2"
              >
                <span class="font-light">
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                  <span class="text-white"> </span>
                </span>
                <span class="font-semibold text-neutral-1"
                  >adipiscing elit. Ultrices lorem non feugiat egestas
                  amet.</span
                >
              </div>
            </div>
            <div
              class="self-stretch relative text-lg leading-[150%] font-light"
            >
              Mobile App
            </div>
          </div>
          <div
            class="rounded-81xl [background:linear-gradient(99.05deg,_#bc3cd8,_#c54b8c)] flex flex-row py-2 px-7 items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-1"
          >
            <div
              class="relative tracking-[0.04em] leading-[150%] uppercase font-semibold"
            >
              View work
            </div>
            <img class="relative w-6 h-6" alt="" src="/icon1.svg" />
          </div>
        </div>
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/col-11@2x.png"
        />
      </div>
      <div
        class="self-stretch h-[490px] flex flex-row items-start justify-start gap-[32px]"
      >
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/col-12@2x.png"
        />
        <div
          class="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]"
        >
          <div
            class="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
            >
              <div
                class="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold"
              >
                Smart Home App
              </div>
              <div
                class="self-stretch relative text-13xl leading-[150%] text-neutral-2"
              >
                <span class="font-light">
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </span>
                <span class="text-neutral-1">
                  <span class="font-light"> </span>
                  <span class="font-semibold"
                    >adipiscing elit. Ultrices lorem non feugiat egestas
                    amet.</span
                  >
                </span>
              </div>
            </div>
            <div
              class="self-stretch relative text-lg leading-[150%] font-light"
            >
              Mobile App
            </div>
          </div>
          <div
            class="rounded-81xl flex flex-row py-2 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-2"
          >
            <div class="relative tracking-[0.04em] leading-[150%] uppercase">
              View work
            </div>
            <img
              class="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
      <div
        class="self-stretch h-[490px] flex flex-row items-start justify-start gap-[32px]"
      >
        <div
          class="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]"
        >
          <div
            class="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[16px]"
            >
              <div
                class="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold"
              >
                Logo Animation
              </div>
              <div
                class="self-stretch relative text-13xl leading-[150%] text-neutral-2"
              >
                <span class="font-light">
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                  <span class="text-white"> </span>
                </span>
                <span class="font-semibold text-neutral-1"
                  >adipiscing elit. Ultrices lorem non feugiat egestas
                  amet.</span
                >
              </div>
            </div>
            <div
              class="self-stretch relative text-lg leading-[150%] font-light"
            >
              Animation
            </div>
          </div>
          <div
            class="rounded-81xl flex flex-row py-2 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-2"
          >
            <div class="relative tracking-[0.04em] leading-[150%] uppercase">
              View work
            </div>
            <img
              class="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/col-13@2x.png"
        />
      </div>
    </div>
    <div
      class="self-stretch h-[996px] flex flex-col py-[74px] px-[107px] box-border items-center justify-start text-5xl"
    >
      <div
        class="self-stretch flex-1 flex flex-row items-center justify-center gap-[34px]"
      >
        <div class="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div
            class="self-stretch relative tracking-[0.06em] leading-[150%] uppercase font-semibold"
          >
            A bit about me
          </div>
          <div
            class="self-stretch relative text-13xl leading-[150%] text-neutral-2"
          >
            <span class="font-light"
              >I am a UI/UX designer who is passionate about creating
            </span>
            <span class="font-semibold text-neutral-1">
              <span
                >beautiful and joyful digital experiences. Besides design, I
                love</span
              >
              <span class="text-white"> </span>
              <span class="text-neutral-1">music, games and travelling. </span>
            </span>
          </div>
        </div>
        <div
          class="self-stretch flex-1 flex flex-row items-center justify-end gap-[32px]"
        >
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[408px] object-cover"
            alt=""
            src="/cover@2x.png"
          />
          <div
            class="self-stretch flex-1 flex flex-col items-end justify-center gap-[32px]"
          >
            <img
              class="self-stretch relative max-w-full overflow-hidden h-[374px] shrink-0 object-cover"
              alt=""
              src="/cover1@2x.png"
            />
            <img
              class="self-stretch relative max-w-full overflow-hidden h-[375px] shrink-0 object-cover"
              alt=""
              src="/cover2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch h-[460px] flex flex-col pt-20 px-[424px] pb-10 box-border items-center justify-center text-center text-37xl text-neutral-2"
    >
      <div
        class="self-stretch flex flex-col items-center justify-start gap-[80px]"
      >
        <div
          class="self-stretch flex flex-col items-center justify-start gap-[60px]"
        >
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[4px]"
          >
            <div class="self-stretch flex flex-row items-start justify-center">
              <div class="flex-1 relative tracking-[-0.02em] leading-[150%]">
                <span class="font-light">
                  <span>Get</span>
                  <span class="text-white"> </span>
                </span>
                <span class="font-semibold text-neutral-1">in Touch.</span>
              </div>
            </div>
            <div
              class="self-stretch relative text-lg leading-[150%] font-light text-neutral-1"
            >
              So that we can talk more about...
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-center gap-[56px]"
          >
            <img
              class="relative w-12 h-12 overflow-hidden shrink-0"
              alt=""
              src="/mail.svg"
            />
            <img
              class="relative w-12 h-12 overflow-hidden shrink-0"
              alt=""
              src="/behance.svg"
            />
            <img
              class="relative w-12 h-12 overflow-hidden shrink-0"
              alt=""
              src="/dribble.svg"
            />
            <img
              class="relative w-12 h-12 overflow-hidden shrink-0"
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div
          class="self-stretch flex flex-row py-1 px-0 items-start justify-center text-lg text-neutral-1"
        >
          <div class="flex-1 relative leading-[150%]">
            <span class="font-light">
              <span class="text-neutral-2">Made with</span>
              <span class="text-neutral-1"> ❣️ </span>
              <span class="text-neutral-2">by</span>
              <span> </span>
            </span>
            <span>
              <span class="font-semibold">Srinivas Dezign</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
