<script lang="ts">
    export let hoverText: string | null;
    export let actualText: string | null;
</script>

<style lang="scss">
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; 
        text-decoration: dotted;
        .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: #555;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .tooltiptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #555 transparent transparent transparent;
        }
        &:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
    }
</style>

<span class="tooltip">{actualText}
  <span class="tooltiptext">{hoverText}</span>
</span>